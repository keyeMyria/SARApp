<?php

namespace App\Http\Resources\Profile;


use App\Http\Helpers\helper;
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
            'id' => $this->id,
            'avatar' => $this->avatar,
            'gender' => $this->gender,
            'birthdate' => $this->birthdate,
            'contact' => $this->contact,
            'address' => helper::getAddress($this->address_id),
            'user' => ($this->user_id) ? helper::getUser($this->user_id, 'user') : helper::getUser($this->employee_id, 'employee')
        ];
    }
}
