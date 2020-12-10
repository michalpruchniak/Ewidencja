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
            $table->integer('set_id')->nullable(); //number of set
            $table->string('network_type')->default(1); //1. PSTD, 2. Internet, 3. ODN, 4. Typewriter, 5. GSM, 6. Not connected
            $table->string('inventory')->nullable();
            $table->string('classification')->nullable(); //1 - ŚT, 2 - PŚT, 3 - EP, WNiP - 4, 9 - pozstałe, 0 - bez klasyfikacji
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
