<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    protected $fillable = [
        'employee_id', 'name', 'email', 'password', 'position', 'user_id'
    ];

    protected $hidden = [
        'password'
    ];

    public function user() {

        return $this->belongsTo('App\User');

    }

    public function profile() {

        return $this->hasOne('App\Model\Profile');

    }


    public function role() {

        return $this->hasOne('App\Model\Role');

    }

    public function logs() {

        return $this->hasMany('App\Model\Logs');

    }
}
