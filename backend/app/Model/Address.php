<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = [
        'street', 'city', 'state', 'zip_code', 'user_id'
    ];

    public function profile() {

        return $this->belongsTo('App\Model\Profile');

    }
}
