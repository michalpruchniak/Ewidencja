<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Units;

class UnitsController extends Controller
{
    public function getAllUnits(){
      $units = Units::all();
      return json_encode($units);
    }
}
