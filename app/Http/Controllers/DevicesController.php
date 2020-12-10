<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Device;

class DevicesController extends Controller
{
    public function storeDevice(Request $request){
        if(!$request->network_type){
            $request->network_type = 1;
        }
        if(!$request->classification){
            $request->classification = 1;
        }
        $device = Device::create([
            'set_id'  => intval($request->set),
            'network_type' => intval($request->network_type),
            'inventory' => $request->inventory,
            'classification' => intval($request->classification)
        ]);

        return json_encode($device);
  }
}
