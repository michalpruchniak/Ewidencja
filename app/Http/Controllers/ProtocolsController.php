<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Handoverprotocol;

class ProtocolsController extends Controller
{
    public function store(Request $request){
        $protocol = Handoverprotocol::create([
            "from" => $request->from,
            "to" => $request->to
        ]);
        return json_encode($protocol);
    }
}
