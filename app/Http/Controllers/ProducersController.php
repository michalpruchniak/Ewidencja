<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Producer;

use App\Http\Requests\ProducersRequest;


class ProducersController extends Controller
{
      public function getAllProducers(){
        $producers = Producer::all();
        return json_encode($producers);
    }

    public function storeProducer(ProducersRequest $request){
      $producer = Producer::create([
        'name' => $request->name
      ]);
      return json_encode($producer);
    }
}
