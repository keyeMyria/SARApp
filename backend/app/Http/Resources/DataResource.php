<?php

namespace App\Http\Resources;

use App\Model\Role;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\Employee\EmployeeResource;

class DataResource extends JsonResource
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
            'name' => $this->name,
            'email' => $this->email,
            'role_id' => $this->role_id,
            'role' => Role::find($this->role_id)->name,
            'avatar' => $this->profile->avatar,
            'gender' => $this->profile->gender,
            'birthdate' => $this->profile->birthdate,
            'contact' => $this->profile->contact,
            'street' => $this->address->street,
            'city' => $this->address->city,
            'state' => $this->address->state,
            'zip' => $this->address->zip,
            'employees' => EmployeeCollection::collection($this->employees)
        ];
    }
}
