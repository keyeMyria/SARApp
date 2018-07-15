<?php

namespace App\Http\Controllers;

use App\User;
use App\Employee;
use App\Mail\VerifyEmail;
use App\Model\VerifyUser;
use App\Http\Helpers\helper;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use App\Http\Requests\SignUpRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use App\Http\Controllers\LogsController;
use App\Http\Requests\EmployeeSignUpRequest;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends LogsController
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {

        $this->middleware('auth:api', ['except' => ['login', 'signup', 'verifyUser', 'getResetToken', 'getVerifyToken']]);

    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login() {

        $credentials = request(['email', 'password']);

        $user = User::where('email', request('email'))->first();

        if(request('action') != null && !$user) {

            $user = new User;
            $user->name = request('name');
            $user->email = request('email');
            $user->password = request('password');
            $user->verified = '1';
            $user->save();

            helper::createProfile($user->id, 'user');
            helper::saveActivity('Login', 'Login using '. request('action'), $user->id);
        }

        if($user){

            if(!$user->verified){

                return response()->json(['error' => 'You need to confirm your account. We have sent you an activation code, please check your email.'], 401);

            }

        }
        

        if (! $token = auth()->attempt($credentials)) {
            
            return response()->json(['error' => 'Email or password doesn\'t exist'], 401);
        
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

        if(!$user){
            return response()->json([
                'sucess' => false,
                'message' => 'There is a problem with creating your account'
            ]);
        }
        
        helper::createProfile($user->id, 'user');
        helper::saveActivity('signup', 'Created an account', $user->id);
        Mail::to($user->email)->send(new VerifyEmail($user));

        return response()->json([
            
            'data' => 'We sent you an activation code. Check your email and click on the link to verify.'

            ]);
     }

    /*
     *
     */ 
    public function verifyUser() {

        $user = User::where('email', request('email'))->first();
        
        $verifyUser = VerifyUser::where('token', request('token'))->where('user_id', $user->id)->first();
        if(!$verifyUser){
            return response()->json([
                    'success' => false,
                    'message' => 'The token may have been already been expired or verified'
                ]);
        }

        if(isset($verifyUser)){

            if(!$user->verified) {

                $user->verified = 1;
                $user->save();
                
                VerifyUser::where('token', request('token'))->delete();

                return response()->json([

                    'success' => true,
                    'message' => 'Email is now verified you may now login'

                ], Response::HTTP_OK);

            } else {

                return response()->json([

                    'success' => false,
                    'message' => 'The token may have been already been expired or verified'

                ], Response::HTTP_NOT_FOUND);

            }

        }else{

            return response()->json([

                'error' => 'Sorry your email cannot be identified. It may already been verified or the email doesn\'t exist.'

            ], Response::HTTP_NOT_FOUND);
            
        }

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
            'role' => auth()->user()->role_id,
            
        ]);

    }

    public function getResetToken() {

        $token = DB::table('password_resets')->get();
        return response()->json(['data' => $token]);
        
    }

    public function getVerifyToken() {
        
        $token = DB::table('verify_users')->get();
        return response()->json(['data' => $token]);

    }

    /*
     * Get the Request
     * Validate and Register Employees
     * 
     */

    public function addEmployee(EmployeeSignUpRequest $request) {

        $employee = Employee::create([
            'name' => $request->name,
            'employee_id' => $request->employee_id,
            'password' => $request->password,
            'position' => $request->position,
            'user_id' => auth()->user()->id  
        ]);
        
        if(!$employee){
            return response()->json([
                'sucess' => false,
                'message' => 'There is a problem with adding an employee'
            ]);
        }
        
        helper::createProfile($employee->id, 'employee');
        helper::saveActivity('Added Employee', 'Add Employee', $employee->user_id);

        return response()->json([
            
                'sucess' => true,
                'message' => 'Employee Added'

            ]);
     }

}