<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Device;
use App\Http\Requests\DeviceRequest;

class DevicesController extends Controller
{
    public function getAllDevices(){
        $devices = Device::all();
        return json_encode($devices);
    }
    public function storeDevice(DeviceRequest $request){
        $device = Device::create([
            'name' => $request->name,
            'network_type' => intval($request->network_type),
            'inventory' => $request->inventory,
            'status' => $request->status,
            'classification' => intval($request->classification),
            'unit_id' => intval($request->unit_id),
            'producers_id' => intval($request->producers_id),
            'purchase_price' => intval($request->purchase_price),
            'type_id' => intval($request->type_id),
            'serial_number' => $request->serial_number,
            'imei' => $request->imei,
            'address_name' => $request->address_name,
            'address_ip' => $request->address_ip,
            'address_mac' => $request->address_mac,
            'description' => $request->description,
            'operation_system' => $request->operation_system,

        ]);

        return json_encode($device);
  }
}
