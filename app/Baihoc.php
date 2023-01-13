<?php

namespace Vanguard;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Baihoc extends Model
{
    use HasFactory;

    protected $keyType = 'string';
    protected $casts = [
        'id' => 'string',
    ];
    public $incrementing = false;
    protected $fillable = ['khoahoc_id', 'baihoc_name', 'baihoc_link_1', 'baihoc_link_2', 'baihoc_file', 'baihoc_stt'];

    public function khoahoc()
    {
        return $this->belongsTo(KhoaHoc::class, 'khoahoc_id');
    }

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($obj) {
            $obj->id = Str::uuid();
        });
    }
}
