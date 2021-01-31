<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\UnitsController;
use App\Http\Controllers\ProtocolsController;
use App\Http\Controllers\PeopleController;
use App\Http\Controllers\DevicesController;
use App\Http\Controllers\ProducersController;
use App\Http\Controllers\OperationsystemController;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => ['auth']], function(){
    Route::get('/', [HomeController::class, 'index']);
    Route::get('/units', [UnitsController::class, 'getAllUnits']);
    Route::get('/people', [PeopleController::class, 'getAllPeople']);
    Route::get('/producers', [ProducersController::class, 'getAllProducers']);
    Route::get('/devices', [DevicesController::class, 'getAllDevices']);
    Route::get('/operationsystem', [OperationsystemController::class, 'getAllOperationsystem']);
    Route::get('/protocols', [ProtocolsController::class, 'getAllProtocols']);
    Route::get('/devices-with-protocols', [ProtocolsController::class, 'devicesWithProtocols']);
    Route::post('/producers/store', [ProducersController::class, 'storeProducer']);
    Route::post('/devices/store', [DevicesController::class, 'storeDevice']);
    Route::post('/protocols/store', [ProtocolsController::class, 'store']);
    Route::post('/protocols/updateunit', [ProtocolsController::class, 'updateUnit']);

    Route::get('/print/{id}', [ProtocolsController::class, 'print']);

});




Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
