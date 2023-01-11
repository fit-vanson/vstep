<?php

namespace Vanguard;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categories extends Model
{
    use HasFactory;
    protected $table = 'categories';
    protected $casts = [
        'removable' => 'boolean'
    ];
    protected $fillable = ['cate_name'];
    public function users()
    {

//        return $this->hasMany(User::class, 'role_id');
    }
}
