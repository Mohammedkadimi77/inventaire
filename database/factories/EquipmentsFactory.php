<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\equipments>
 */
class EquipmentsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word(),
            'type' => fake()->word(),
            'serial_number' => fake()->unique()->numerify('##########'),
            'status' => fake()->randomElement(['disponible', 'affecté', 'en_maintenance', 'hors_service', 'stock']),
            'location' => fake()->address(),
            'assigned_to' => fake()->randomElement(User::pluck('id')),
        ];
    }
}
