<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{
    protected $fillable = [
        'name'
    ];

    public function user() {

        return $this->belongsTo('App\User');

    }

    public function users() {

        return $this->hasMany('App\User');

    }
}
