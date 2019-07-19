<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::group([
    'namespace' => 'API'], function () {

    Route::post('register', 'RegisterController@register');
    Route::post('login', 'RegisterController@login');

    Route::post('parts-search', 'PartsSearchController@index');

    Route::post('parts', 'PartsController@show');
    Route::get('parts', 'PartsController@index');
    Route::get('rand-parts', 'PartsController@randoms');
    Route::post('refresh-shopping-cart', 'PartsController@refresh_shopping_cart');
    Route::post('shipping-rates', 'ShipmentController@rates');

    Route::get('orders', 'OrdersController@index');
    Route::get('stock-ca', 'PartsController@stock_ca');

});


Route::group([
    'namespace' => 'API',
    'middleware' => 'auth:api'], function () {

    Route::post('logout', 'RegisterController@logout');
    Route::post('add-parts', 'PartsController@store');
    Route::put('update-parts', 'PartsController@update');
    Route::delete('delete-parts', 'PartsController@destroy');

    Route::get('user', 'UsersController@show');
    Route::put('user/{id}', 'UsersController@update');




});

