<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Producer;

class ProducersController extends Controller
{
      public function getAllProducers(){
        $producers = Producer::all();
        return json_encode($producers);
    }

    public function storeProducer(Request $request){
      $producer = Producer::create([
        'name' => $request->name
      ]);
      return json_encode($producer);
    }
}
