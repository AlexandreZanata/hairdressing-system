<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash; // Importe o Hash

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Substitua o User::factory() por este bloco:
        User::create([
            'first_name' => 'Admin',
            'last_name' => 'User',
            'email' => 'admin@example.com',
            'phone' => '123456789',
            'role' => 'admin', // Definido como admin
            'password' => Hash::make('password'), // Use 'password' como senha
            'email_verified_at' => now(),
        ]);

        // (Opcional) Crie um usuário 'client' de teste
        User::create([
            'first_name' => 'Client',
            'last_name' => 'Test',
            'email' => 'client@example.com',
            'phone' => '987654321',
            'role' => 'client',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);

        // Mantenha a chamada para os outros seeders
        $this->call([
            ServiceSeeder::class,
            StaffSeeder::class,
        ]);
    }
}
