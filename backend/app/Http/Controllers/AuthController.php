<?php

namespace App\Http\Controllers;

use App\Model\User;
use App\Mail\VerifyEmail;
use App\Model\VerifyUser;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignUpRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {

        $this->middleware('auth:api', ['except' => ['login', 'signup']]);

    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login() {

        $credentials = request(['email', 'password']);

        if (! $token = auth()->attempt($credentials)) {

            return response()->json(['error' => 'Unauthorized'], 401);

        }

        return $this->respondWithToken($token);

    }

    /*
     * Get the Request
     * Validate and Register  
     * 
     */

     public function signup(SignUpRequest $request) {

        $user = User::create($request->all());
        
        $verify = VerifyUser::create([

            'user_id' => $user->id,
            'token' => str_random(40)

        ]);

        Mail::to($user->email)->send(new VerifyEmail($user));

        return response()->json(['data' => 'We sent you an activation code. Check your email and click on the link to verify.']);

     }

    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me() {

        return response()->json(auth()->user());

    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout() {

        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);

    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {

        return $this->respondWithToken(auth()->refresh());

    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token) {

        return response()->json([

            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60,
            'user' => auth()->user()->name

        ]);

    }
}