<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Handoverprotocol;
use App\Models\Device;

class ProtocolsController extends Controller
{
    public function getAllProtocols(){
        $protocols = Handoverprotocol::all();

        return json_encode($protocols);
    }

    public function store(Request $request){
        $protocol = Handoverprotocol::create([
            "from_id" => $request->from_id,
            "to_id" => $request->to_id
        ]);
        return json_encode($protocol);
    }

    public function updateUnit(Request $request){
        $device = Device::find($request->device);
        $device->unit_id = $request->unit_id;
        $device->save();

        return json_encode($device);
    }
}
