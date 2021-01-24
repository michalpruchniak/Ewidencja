<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use DB;
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

    public function devicesWithProtocols(){
        $protocol = [];
        $devices = [];
        $allDevices = Device::with('myProtocols')->get();

        foreach($allDevices as $device){
            $obj = new \stdClass();
            foreach($device->myProtocols as $protocol){
                $obj->protocol_id = $protocol->id;
                $obj->name = $device->name;
                array_push($devices, $obj);
            }
        }

        return json_encode($devices);
    }
}
