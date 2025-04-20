<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\equipments;
use App\Models\User;
        
class requests extends Model
{
    /** @use HasFactory<\Database\Factories\RequestsFactory> */
    use HasFactory;

    protected $fillable = [
        'user_id',
        'equipment_id',
        'justification',
        'status',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function equipment()
    {
        return $this->belongsTo(equipments::class);
    }


}
