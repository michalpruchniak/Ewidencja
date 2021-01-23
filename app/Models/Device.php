<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Device extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'set_id',
        'network_type',
        'inventory',
        'classification',
        'unit_id',
        'producers_id',
        'type_id',
        'serial_number',
        'imei',
        'address_name',
        'address_ip',
        'address_mac',
        'description',
        'operation_system',
    ];

    public function myProtocols(){
        return $this->belongsToMany(Handoverprotocol::class);
    }
}
