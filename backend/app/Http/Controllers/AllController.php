<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Http\Resources\DataResource;

class AllController extends Controller
{
    public function __construct() {

        $this->middleware('auth:api');

    }

    public function all() {
        $user = User::find(auth()->user()->id);
        // $user->profile;
        // $user->address;
        // $user->employees;
        
        // return response()->json([
        //     'data' => $user
        // ]);

        return new DataResource($user);
    }
}
