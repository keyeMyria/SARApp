<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = [
        'street', 'city', 'state', 'zip_code', 'user_id', 'employee_id'
    ];

    public function profile() {

        return $this->belongsTo('App\Model\Profile');

    }

    public function user() {

        return $this->belongsTo('App\User');

    }

    public function employee() {

        return $this->belongsTo('App\Employee');

    }
}
