<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $fillable = [
        'gender', 'birthdate', 'contact', 'address_id', 'user_id', 'employee_id'
    ];

    public function address() {

        return $this->hasOne('App\Model\Address');

    }

    public function user(){

        return $this->belongsTo('App\User');

    }

    public function employee() {

        return $this->belongsTo('App\Employee');

    }
}
