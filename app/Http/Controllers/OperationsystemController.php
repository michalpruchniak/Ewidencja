<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Operationsystem;


class OperationsystemController extends Controller
{
    public function getAllOperationsystem(){
        $operationsystem = Operationsystem::all();
        return json_encode($operationsystem);
  }
    public function store(Request $request){
    $op = Operationsystem::create([
      'name' => $request->name
    ]);
    return json_encode($op);
  }
}
