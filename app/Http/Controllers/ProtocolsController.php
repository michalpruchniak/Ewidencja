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
        $idCats = array_column($request->devices, 'id');
        $protocol->myDevices()->attach($idCats);
        return json_encode($protocol);
    }

    public function updateUnit(Request $request){
        $device = Device::find($request->device);
        $device->unit_id = $request->unit_id;
        $device->save();

        return json_encode($device);
    }

    public function devicesWithProtocols(){

        $devices = DB::table('handoverprotocols as protocol')
                    ->join('device_handoverprotocol as dh', 'protocol.id', '=', 'dh.handoverprotocol_id')
                    ->join('devices as d', 'd.id', '=', 'dh.device_id')
                    ->select(['protocol.id as protocol_id', 'd.name as name', 'd.id as id'])
                    ->get();


        return json_encode($devices);
    }
}
