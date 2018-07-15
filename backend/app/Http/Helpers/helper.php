<?php

namespace App\Http\Helpers;

use App\User;
use App\Employee;
use App\Model\Log;
use App\Model\Address;
use App\Model\Profile;

class helper {
    /**
     * Store a log or activity performed by user
     */
    public static function saveActivity($action, $details, $id) {
        Log::create([
            'name' => $action,
            'details' => $details,
            'user_id' => $id
        ]);
    }

    /**
     * Create a profile for the user
     */

    public static function createProfile($id, $user) {
        if($user == 'user'){
            $address = Address::create([
                'user_id' => $id,
            ]);

            $profile = Profile::create([
                'address_id' => $address->id,
                'user_id' => $id,
            ]); 
        } else if($user == 'employee') {
            $address = Address::create([
                'employee_id' => $id,
            ]);

            $profile = Profile::create([
                'address_id' => $address->id,
                'employee_id' => $id,
            ]); 
        }
    }

     /**
      * Get the current user address
      */
    public static function getAddress($id) {

            $addr = Address::where('id', $id)->first();

            return [
                'street' => $addr->street,
                'city' => $addr->city,
                'state' => $addr->state,
                'zip_code' => $addr->zip_code,
            ];
      }

    public static function getUser($id, $table) {

        if($table == 'user'){
            $user = User::where('id', $id)->first();

            return [
                'name' => $user->name,
                'email' => $user->email,
                'role' => $user->role_id
            ];
        }
        else if($table == 'employee') {
            $employee = Employee::where('id', $id)->first();
            return [
                'name' => $employee->name,
                'position' => $employee->position,
                'role' => $employee->role_id
            ];
        }

    }
}