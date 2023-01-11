<?php

namespace Vanguard;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KhoaHoc extends Model
{
    use HasFactory;
    protected $fillable = ['khoahoc_name','cate_id','status','stt'];

    public function category()
    {
        return $this->belongsTo(Categories::class, 'cate_id');
    }

    public function baihoc()
    {
        return $this->hasMany(Baihoc::class, 'khoahoc_id');
    }
}
