<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHandoverprotocolsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('handoverprotocols', function (Blueprint $table) {
            $table->id();
            $table->integer('from_id');
            $table->integer('to_id');
            $table->integer('type')->default(1); //1. dokument przekazania, 2. dokument brakowania
            $table->integer('status')->default(1); //0. unieważniony, 1. wystawiony, 2. podpisany
            $table->string('basics');
            $table->string('transport')->nullable();
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
        Schema::dropIfExists('handoverprotocols');
    }
}
