<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateEquipmentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:255',
            'type' => 'required',
            'serial_number' => 'required|numeric',
            'status' => ['required', Rule::in(['disponible', 'affecté', 'en_maintenance', 'hors_service', 'stock'])],
            'location' => 'required',
            'assigned_to' => 'required',
        ];
    }
}
