<?php

namespace App\Http\Resources;

use App\Model\Role;
use Illuminate\Http\Resources\Json\Resource;

class EmployeeCollection extends Resource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'employee_id' => $this->employee_id,
            'name' => $this->name,
            'position' => $this->position,
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
        ];
    }
}
