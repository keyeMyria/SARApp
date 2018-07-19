<?php

namespace App;

use Tymon\JWTAuth\Contracts\JWTSubject;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Employee extends Authenticatable implements JWTSubject
{
    use Notifiable;

    protected $guard = 'employee';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'employee_id', 'name', 'email', 'password', 'position', 'role_id', 'user_id'
    ];


    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }

    public function setPasswordAttribute($value) {

        $this->attributes['password'] = bcrypt($value);

    }

    public function user() {

        return $this->belongsTo('App\User');

    }

    public function role() {
        
        return $this->hasOne('App\Model\Role');

    }

    public function profile() {

        return $this->hasOne('App\Model\Profile');

    }

    public function logs() {

        return $this->hasMany('App\Model\Log');

    }

    public function address() {
        
        return $this->hasOne('App\Model\Address');

    }
}
