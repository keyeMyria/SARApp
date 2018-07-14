<?php

namespace App\Http\Controllers;

use App\Model\Log;
use Illuminate\Http\Request;


class LogsController extends Controller
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
        $logs = Log::all()->where('user_id', auth()->user()->id);
        if(!$logs) {
            return response()->json(['error' => 'no logs to show']);
        } 
        if(!count($logs) > 0){
            return response()->json([
                'message' => 'No activity'
            ]);
        }     
        return $logs;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Model\Log  $log
     * @return \Illuminate\Http\Response
     */
    public function show(Log $log)
    {
        $d = Log::where('user_id', auth()->user()->id)->where('id', $log->id)->first();
        if(!$d){
            return response()->json([
                    'success' => true,
                    'message' => 'Request activity might not exist'
                ]);
        }
        return response()->json([
                'sucess' => true,
                'message' => $d
            ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Model\Log  $logs
     * @return \Illuminate\Http\Response
     */
    public function destroy(Log $log)
    {
        $d = Log::where('user_id', auth()->user()->id)->where('id', $log->id)->first();
        if(!$d){
            return response()->json([
                'success' => true,
                'message' => 'Request activity does not exist'
            ]);
        } else {
            if(!$d->delete()){
                return response()->json([
                    'sucess' => false,
                    'result' => 'Error deleting activity with id '. $log->id 
                ]);
            }
        }
        return response()->json([
                'success' => true,
                'result' => 'Successful deleting activity with id '. $log->id
            ]);
    }

    public function destroyAll()
    {  
        $log = Log::where('user_id', auth()->user()->id)->get();

        if(!$log->count() > 0){

            return response()->json([
                    'success'=> true,
                    'message' => 'No activities exists'
                ]);

        } else {
            if(!$log->delete()) {
                return response()->json([
                    'success' => false,
                    'message' => 'Error deleting activities'
                ]);
            }
        }
        return response()->json([
            'sucess' => true,
            'message' => 'Deleting activites success!!'
            ]);
    }
}
