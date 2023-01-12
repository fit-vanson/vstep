<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('khoa_hocs', function (Blueprint $table) {
//            $table->id();
            $table->uuid('id')->primary();
            $table->string('khoahoc_name')->nullable()->index();
            $table->uuid('cate_id')->index();
            $table->integer('status')->default(1);
            $table->integer('stt')->nullable();
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
        Schema::dropIfExists('khoa_hocs');
    }
};
