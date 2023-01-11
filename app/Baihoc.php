<?php

namespace Vanguard;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Baihoc extends Model
{
    use HasFactory;
    protected $fillable = ['khoahoc_id','baihoc_name','baihoc_link_1','baihoc_link_2','baihoc_file','baihoc_stt'];
    public function khoahoc()
    {
        return $this->belongsTo(KhoaHoc::class, 'khoahoc_id');
    }
}
