<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DeviceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|between:7,50',
            'network_type' => 'nullable|integer',
            'inventory' => 'required|string|between:5,40',
            'unit_id' => 'required|integer',
            'status' =>  'required|integer|between:1,4',
            'quantity' => 'nullable|integer',
            'purchase_price' => 'nullable|integer',
            'producers_id' => 'required|integer',
            'operation_system' => 'nullable|string',
            'type_id' => 'nullable|integer',
            'serial_number' => 'nullable|integer|between:5,45',
            'imei' => 'nullable|string|between:2,33',
            'address_name' => 'nullable|string|between:2,45',
            'address_ip' => 'nullable|string|between:7,15',
            'address_mac' => 'nullable|string|between:7,45',
            'description' => 'nullable|string|between:7,400',

        ];
    }
}
