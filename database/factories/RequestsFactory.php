<?php

namespace Database\Factories;

use App\Models\equipments;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\requests>
 */
class RequestsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => fake()->randomElement(User::pluck('id')),
            'equipment_id' => fake()->randomElement(equipments::pluck('id')),
            'status' => fake()->randomElement(['en_attente', 'approuvée', 'refusée', 'livrée']),
            'justification' => fake()->sentence(),
        ];
    }
}
