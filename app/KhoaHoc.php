<?php

namespace Vanguard;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class KhoaHoc extends Model
{
    use HasFactory;

    protected $keyType = 'string';
//    protected $fillable = ['khoahoc_name', 'cate_id', 'status', 'stt'];
//    protected $fillable = ['khoahoc_name'];

    protected $guarded= [];
    protected $casts = [
        'id' => 'string',
    ];
    public $incrementing = false;

    public function category()
    {
        return $this->belongsTo(Categories::class, 'cate_id');
    }

    public function baihoc()
    {
        return $this->hasMany(Baihoc::class, 'khoahoc_id');
    }

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($obj) {
            $obj->id = Str::uuid();
        });
    }
}
