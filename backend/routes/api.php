<?php

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function () {

    Route::post('login', 'AuthController@login');
    Route::post('signup', 'AuthController@signup');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('sendPasswordResetLink', 'ResetPasswordController@sendEmail');
    Route::post('resetPassword', 'ChangePasswordController@process');
    Route::get('reset-tokens', 'AuthController@getResetToken');
    Route::get('verify-tokens', 'AuthController@getVerifyToken');
    Route::post('/user/verify', 'AuthController@verifyUser');

    Route::post('employee/login', 'EmployeeController@login');
    Route::post('employee/signup', 'AuthController@addEmployee');
    Route::get('employee', 'EmployeeController@index');
    Route::get('employee/profile', 'EmployeeController@profile');

    
    Route::apiResource('user', 'UserController');
    Route::apiResource('profile', 'ProfileController');
    Route::apiResource('log', 'LogsController');

    Route::delete('log/all', 'LogsController@destroyAll');
});
