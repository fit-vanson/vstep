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
            $table->id();
            $table->string('khoahoc_name')->nullable()->index();
            $table->integer('cate_id')->index();
            $table->integer('status')->default(1);
            $table->integer('stt')->default(1);
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
