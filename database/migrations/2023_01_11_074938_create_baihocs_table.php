<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('baihocs', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->uuid('khoahoc_id');
            $table->string('baihoc_name')->nullable()->index();
            $table->string('baihoc_link_1')->nullable();
            $table->string('baihoc_link_2')->nullable();
            $table->string('baihoc_file')->nullable();
            $table->integer('baihoc_stt')->nullable();
            $table->timestamps();
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('baihocs');
    }
};
