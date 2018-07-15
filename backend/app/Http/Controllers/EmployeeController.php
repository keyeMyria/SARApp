<?php

namespace App\Http\Controllers;

use App\Employee;
use App\Model\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\Profile\ProfileResource;
use App\Http\Resources\Employee\EmployeeResource;

class EmployeeController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct() {

        $this->middleware('auth:employee', ['except' => ['login']]);

    }

    /**
     * Get a JWT via given credentials.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login() {

        $credentials = request(['employee_id', 'password']);

        if (!$token = Auth::guard('employee')->attempt($credentials)) {
            
            return response()->json(['error' => 'Invalid username or password'], 401);
        
        }

        return $this->respondWithToken($token);
    }

    public function index() {

        $employee = Employee::where('id', Auth::guard('employee')->user()->id)->first();
        if(!$employee){
            return response()->json(['error' => 'Sorry the employee you are trying to access doesn\'t exist']);
        } 
        return new EmployeeResource($employee);

    }

     
    /**
     * Get the authenticated User.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me() {

        return response()->json(Auth::guard('employee')->user());

    }

    /**
     * Log the user out (Invalidate the token).
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout() {

        Auth::guard('employee')->logout();

        return response()->json(['message' => 'Successfully logged out']);

    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh() {

        return $this->respondWithToken(Auth::guard('employee')->refresh());

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
            'expires_in' => Auth::guard('employee')->factory()->getTTL() * 60,
            'role' => Auth::guard('employee')->user()->role_id

        ]);

    }

    public function profile() {
        $profile = Profile::where('employee_id', Auth::guard('employee')->user()->id)->first();

        if(!$profile) {
            return response()->json([
                'success' => false,
                'message' => 'Cant retrieve profile information'
            ]);
        }

        return new ProfileResource($profile);
    }

}
