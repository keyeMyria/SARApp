<?php

namespace App\Http\Helpers;

use App\User;
use App\Model\Log;
use App\Model\Address;
use App\Model\Profile;

class helper {
    /**
     * Store a log or activity performed by user
     */
    public static function saveActivity($action, $details, $user_id) {
        Log::create([
            'name' => $action,
            'details' => $details,
            'user_id' => $user_id
        ]);
    }

    /**
     * Create a profile for the user
     */

     public static function createProfile($user_id) {
        $address = Address::create([
            'user_id' => $user_id,
        ]);

        $profile = Profile::create([
            'address_id' => $address->id,
            'user_id' => $user_id,
        ]);    
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

      public static function getUser($id) {

            $user = User::where('id', $id)->first();

            return [
                'name' => $user->name,
                'email' => $user->email
            ];

      }
}