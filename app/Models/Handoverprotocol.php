<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Handoverprotocol extends Model
{
    use HasFactory;
    protected $fillable = [
        "from_id",
        "to_id",
        "basics",
        "transport"
    ];

    public function myDevices(){
        return $this->belongsToMany(Device::class);
    }
}
