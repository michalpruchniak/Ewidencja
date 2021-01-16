<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Handoverprotocol;
use App\Models\Device;

class ProtocolsController extends Controller
{
    public function store(Request $request){
        $protocol = Handoverprotocol::create([
            "from" => $request->from,
            "to" => $request->to
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
