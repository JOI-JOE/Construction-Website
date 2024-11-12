<?php

use App\Http\Controllers\admin\DashboardController;
use App\Http\Controllers\admin\ProjectController;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\admin\TempImageController;
use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\front\ServiceController as FrontServiceController;
use App\Models\TempImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');

Route::post('authenticate', [AuthenticationController::class, 'authenticate']);
Route::get('get-services', action: [FrontServiceController::class, 'index']);
Route::get('get-latest-services', [FrontServiceController::class, 'lastestServices']);

Route::group(['middleware' => ['auth:sanctum']], function () {
    // Protected Routes
    Route::get('dashboard', [DashboardController::class, 'index']);
    Route::get('logout', [AuthenticationController::class, 'logout']);

    // Route service
    Route::resource('services', ServiceController::class);

    // Route Project
    Route::resource('projects', ProjectController::class);

    // Temp-Image
    Route::post('temp-images', [TempImageController::class, 'store']);
});
