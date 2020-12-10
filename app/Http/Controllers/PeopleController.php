<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Person;

class PeopleController extends Controller
{
  public function getAllPeople(){
    $people = Person::all();
    return json_encode($people);
  }
}
