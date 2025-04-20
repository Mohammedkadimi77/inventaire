<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PHPUnit\Framework\Attributes\Ticket;

class equipments extends Model
{
    /** @use HasFactory<\Database\Factories\EquipmentsFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
        'serial_number',
        'status',
        'location',
        'assigned_to',
        'created_at',
        'updated_at',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    public function tickets()
    {
        return $this->hasMany(tickets::class);
    }
}
