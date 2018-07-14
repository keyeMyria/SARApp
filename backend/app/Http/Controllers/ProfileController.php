<?php

namespace App\Http\Controllers;

use App\Model\Address;
use App\Model\Profile;
use Illuminate\Http\Request;
use App\Http\Resources\Profile\ProfileResource;


class ProfileController extends Controller
{
    public function __construct() {

        $this->middleware('auth:api');

    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $profile = Profile::where('user_id', auth()->user()->id)->first();
        if(!$profile) {
            return response()->json([
                'success' => false,
                'message' => 'Cant retrieve profile information'
            ]);
        }
        return new ProfileResource($profile);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        if($request->hasFile('file')){
            
            $filenameWithExt = $request->file('file')->getClientOriginalName();
            $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
            
            $extension = $request->file('file')->getClientOriginalExtension();
            
            $fileNameToStore = $filename.'_'.time().'.'.$extension;
            
            $path = $request->file('file')->storeAs('public/images', $fileNameToStore);

        }

        
        
        $profile = Profile::where('user_id', auth()->user()->id)
        ->update([
            'avatar' => ($request->hasFile('file')) ? $fileNameToStore : Profile::where('user_id', auth()->user()->id)->first()->avatar,
            'gender' => $request->gender,
            'birthdate' => $request->birthdate,
            'contact' => $request->contact,
        ]);

        $address = Address::where('user_id', auth()->user()->id)
        ->update([
            'street' => $request->street,
            'city' => $request->city,
            'state' => $request->state,
            'zip_code' => $request->zip
        ]);

        if(!$profile && !$address){
            return response()->json([
                'success' => false,
                'message' => 'There must be something wrong with the server or your data are suspicious'
            ]);
        }
        return response()->json([
            'success' => true,
            'message' => 'Profile Updated!!',
        ]);
    }

}
