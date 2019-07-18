<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;

use App\Http\Requests;
use Illuminate\Http\Request;
use Validator;
use URL;
use Session;
use Helper;
use Redirect;
use Illuminate\Support\Facades\Input;
/** All Paypal Details class **/
use PayPal\Rest\ApiContext;
use PayPal\Auth\OAuthTokenCredential;
use PayPal\Api\Amount;
use PayPal\Api\Details;
use PayPal\Api\Item;
use PayPal\Api\ItemList;
use PayPal\Api\Payer;
use PayPal\Api\Payment;
use PayPal\Api\RedirectUrls;
use PayPal\Api\ExecutePayment;
use PayPal\Api\PaymentExecution;
use PayPal\Api\Transaction;
use App\Model\Customer;
use App\Model\Price;
use App\Model\Part;


class PayPalController extends Controller
{
    private $_api_context;
    protected $price;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        /** setup PayPal api context **/
        $paypal_conf = \Config::get('paypal');
        $this->_api_context = new ApiContext(new OAuthTokenCredential($paypal_conf['client_id'], $paypal_conf['secret']));
        $this->_api_context->setConfig($paypal_conf['settings']);
        $this->price = Input::get('amount');

    }
    /**
     * Show the application paywith paypalpage.
     *
     * @return \Illuminate\Http\Response
     */
    public function payWithPaypal()
    {
        $amount = $this->price;
        $result = Input::get('result');
        Session::put('result', $result);
        Session::put('amount', $amount);

        return view('paywithpaypal', compact('amount'));
    }
    /**
     * Store a details of payment with paypal.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function postPaymentWithpaypal(Request $request)
    {
        $payer = new Payer();
        $payer->setPaymentMethod('paypal');
        $item_1 = new Item();
        $item_1->setName('Item 1') /** item name **/
        ->setCurrency('USD')
            ->setQuantity(1)
            ->setPrice($request->get('amount')); /** unit price **/
            //->setPrice($this->price->value); /** unit price **/

        $item_list = new ItemList();
        $item_list->setItems(array($item_1));
        $amount = new Amount();
        $amount->setCurrency('USD')
            ->setTotal($request->get('amount'));
            //->setTotal($this->price->value);

        $transaction = new Transaction();
        $transaction->setAmount($amount)
            ->setItemList($item_list)
            ->setDescription('Your transaction description');
        $redirect_urls = new RedirectUrls();
//        $redirect_urls->setReturnUrl(URL::route('payment.status')) /** Specify return URL **/
          $redirect_urls->setReturnUrl('http://localhost:8000/paypal/success') /** Specify return URL **/

                ->setCancelUrl(URL::route('payment.status'));
        $payment = new Payment();
        $payment->setIntent('Sale')
            ->setPayer($payer)
            ->setRedirectUrls($redirect_urls)
            ->setTransactions(array($transaction));
        /** dd($payment->create($this->_api_context));exit; **/
        try {
            $payment->create($this->_api_context);
        } catch (\PayPal\Exception\PPConnectionException $ex) {
            if (\Config::get('app.debug')) {
                \Session::put('error','Connection timeout');
                return Redirect::route('addmoney.paywithpaypal');
                /** echo "Exception: " . $ex->getMessage() . PHP_EOL; **/
                /** $err_data = json_decode($ex->getData(), true); **/
                /** exit; **/
            } else {
                \Session::put('error','Some error occur, sorry for inconvenient');
                return Redirect::route('addmoney.paywithpaypal');
                /** die('Some error occur, sorry for inconvenient'); **/
            }
        }
        foreach($payment->getLinks() as $link) {
            if($link->getRel() == 'approval_url') {
                $redirect_url = $link->getHref();
                break;
            }
        }
        /** add payment ID to session **/
        Session::put('paypal_payment_id', $payment->getId());
        if(isset($redirect_url)) {
            /** redirect to paypal **/
            return Redirect::away($redirect_url);
        }
        \Session::put('error','Unknown error occurred');
        return Redirect::route('addmoney.paywithpaypal');
    }
    public function getPaymentStatus()
    {
        /** Get the payment ID before session clear **/
        //$payment_id = Session::get('paypal_payment_id');
        $payment_id = Input::get('paymentId');

        /** clear the session payment ID **/
        Session::forget('paypal_payment_id');
        if (empty(Input::get('PayerID')) || empty(Input::get('token'))) {
            \Session::put('error','Payment failed');
            return Redirect::route('addmoney.paywithpaypal');
        }
        $payment = Payment::get($payment_id, $this->_api_context);
        /** PaymentExecution object includes information necessary **/
        /** to execute a PayPal account payment. **/
        /** The payer_id is added to the request query parameters **/
        /** when the user is redirected from paypal back to your site **/
        $execution = new PaymentExecution();
        $execution->setPayerId(Input::get('PayerID'));
        /**Execute the payment **/
        $result = $payment->execute($execution, $this->_api_context);

        /** dd($result);exit; /** DEBUG RESULT, remove it later **/
        if ($result->getState() == 'approved') {

            /** it's all right **/
            /** Here Write your database logic like that insert record or value in database if you want **/
            \Session::put('success','Payment success');
            $resultData = Session::get('result');
            Session::forget('result');

            $amount = Session::get('amount');
            Session::forget('amount');

            $orderData = json_decode(base64_decode($resultData), true);
            //return dd($orderData);

            $customersOrder = array();
            $customersOrder['user'] = $orderData['user'];
            $customersOrder['amount'] = $amount;
            foreach($orderData['data'] as $partHash) {
                $part = Part::where('unique_hash', $partHash['unique_hash'])->get(['brand_name', 'part_number', 'warehouse']);
                Part::where('unique_hash', $partHash['unique_hash'])->decrement('qty', $partHash['count']);
                $customersOrder['data'][]['count'] = $partHash['count'];
                $customersOrder['data'][]['brand_name'] = $part->brand_name;
                $customersOrder['data'][]['part_number'] = $part->part_number;
                $customersOrder['data'][]['warehouse'] = $part->warehouse;

                //$newOrder = Order::create($customersOrder);
                //return response()->json($newOrder, 200);

            }
            $serializedOrder = serialize($customersOrder);

            $newOrder = New Order;
            $newOrder->order = $serializedOrder;
            $newOrder->save();
            //return response()->json($newOrder, 200);
            //return Redirect::route('addmoney.paywithpaypal');
            //return redirect('http://backcartestpro.qbex.io/final');
            //return redirect()->route('send-pdf', array('customer_id' => $customer->id, 'result_token' => $secretLink, 'customer_email' => $customerData['email']));
            return response()->json('Payment success', 200);
        }
        \Session::put('error','Payment failed');
        return Redirect::route('addmoney.paywithpaypal');
    }
}
