<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Logs extends Model
{
    protected $fillable = [
        'action', 'details', 'user_id', 'employee_id'
    ];

    public function user() {

        return $this->belongsTo('App\User');

    }

    public function employee() {

        return $this->belongsTo('App\Employee');

    }
}
