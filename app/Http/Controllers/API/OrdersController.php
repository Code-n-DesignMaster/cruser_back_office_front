<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Model\Country;
use App\Model\Order;
use App\User;
use Illuminate\Support\Facades\Auth;

class OrdersController extends Controller
{
    public function index(Request $request) {
	global $request;
	$serializedOrders = Order::all();
	$orders = $serializedOrders->each(function($item, $key) {
    	    $item['order'] = unserialize($item['order']);
	});
	return $orders->toJson();
	$filter_orders = collect($orders->toArray())->filter(function ($value, $key){
    	    $data_search = ''.collect($value['order']['data'])->search(function ($search_value, $search_key){
		global $request;
		if(!$request->part){
		    return true;
		}
		return $search_value['part_number'] == $request->part;
    	    }).'';
        
    	    return $data_search != '';
	})->filter(function ($value) {
    	    global $request;
	    if(!$request->email){
		 return true;
	    }
	    return ''.strpos($value['order']['user']['email'], $request->email) .'' != '';
        })
         ->filter(function ($value) {
	    global $request;
	    if(!$request->country){
		return true;
	    }
	    return ''. strpos($value['order']['user']['country'], $request->country).'' !='';		
        });
 
//dd($filter_orders);
//dd(is_array($filter_orders->all()));
	return array_values($filter_orders->all());
    }

    public function userOrders($id) {
	$email = Auth::user()->email;
	$serializedOrders = Order::where('order', 'like', '%"'.$email.'"%')->get();
	$orders = $serializedOrders->each(function($item, $key) {
    	    $item['order'] = unserialize($item['order']);
	});
	return $orders->toJson();

    }
}
