<?php

namespace Vanguard;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;
use Ramsey\Uuid\Uuid;

class Categories extends Model
{
    use HasFactory;
    protected $table = 'categories';
    protected $keyType =  'string';
    protected $casts = [
        'removable' => 'boolean',
        'id' => 'string',
    ];
    public $incrementing = false;

    protected $fillable = ['cate_name'];

    public function khoahoc()
    {
        return $this->hasMany(KhoaHoc::class, 'cate_id');
    }

    protected static function boot()
    {
        parent::boot();
        static::creating(function ($obj){
            $obj->id = Str::uuid();
        });
    }
}
