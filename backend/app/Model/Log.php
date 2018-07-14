<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    protected $fillable = [
        'name', 'details', 'user_id'
    ];

    public function user() {

        return $this->belongsTo('App\User');

    }

    public function employee() {

        return $this->belongsTo('App\Employee');

    }
}
