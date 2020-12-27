<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDevicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('devices', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->integer('set_id')->nullable(); //number of set
            $table->string('network_type')->default(1); //1. PSTD, 2. Internet, 3. ODN, 4. Typewriter, 5. GSM, 6. Not connected
            $table->string('inventory')->nullable();
            $table->string('classification')->nullable(); //1 - ŚT, 2 - PŚT, 3 - EP, WNiP - 4, 9 - pozstałe, 0 - bez klasyfikacji
            $table->integer('status')->default(1); //1 - aktywny, 2 - zablokowany, 3 - zwrócony, 9 - wybrakowany
            $table->integer('quantity')->nullable()->default(0);
            $table->float('purchase_price')->nullable()->default(0);
            $table->integer('producers_id')->nullable();
            $table->integer('unit_id')->nullable();
            $table->integer('type_id')->nullable();
            $table->string('serial_number')->nullable();
            $table->string('imei')->nullable();
            $table->string('address_name')->nullable();
            $table->string('address_ip')->nullable();
            $table->string('address_mac')->nullable();
            $table->text('description')->nullable();
            $table->string('operation_system')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('devices');
    }
}
