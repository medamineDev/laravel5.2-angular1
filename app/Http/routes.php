<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// =============================================
// HOME PAGE ===================================
// =============================================
Route::get('/home', function()
{
    return View::make('index');
});

Route::get('/', function()
{
    return View::make('welcome');
});

Route::get('/getImage',"HomeController@getImage");


// =============================================
// API ROUTES ==================================
// =============================================
Route::group(array('prefix' => 'api'), function() {

    // since we will be using this just for CRUD, we won't need create and edit
    // Angular will handle both of those forms
    // this ensures that a user can't access api/create or api/edit when there's nothing there
    Route::resource('comments', 'CommentController',
        array('except' => array('create', 'edit', 'update')));
});

// =============================================
// CATCH ALL ROUTE =============================
// =============================================
// all routes that are not home or api will be redirected to the frontend
// this allows angular to route them
/*App::missing(function($exception)
{
    return View::make('index');
});*/

/*Route::any('{catchall}', function() {
    return View::make('index');
})->where('catchall', '.*');*/