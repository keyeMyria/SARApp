<?php

namespace App\Http\Resources;

use App\User;
use App\Http\Resources\UserResource;
use Illuminate\Http\Resources\Json\JsonResource;

class ProfileResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'user' => new UserResource(User::where('id', $this->user_id)->first()),
            'gender' => $this->gender,
            'birthdate' => $this->birthdate,
            'contact' => $this->contact,
            'address' => [
                'url' => url('http://localhost:8000/api/auth/profile/address', $this->id)
            ]
        ];
    }
}
