<?php

namespace Database\Seeders;

use App\Models\Staff;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class StaffSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Vamos usar o usuário 'admin' que criamos
        $adminUser = User::where('email', 'admin@example.com')->first();

        // Só crie o Staff se o usuário de teste existir
        if ($adminUser) {
            Staff::create([
                'user_id' => $adminUser->id,
                'display_name' => $adminUser->first_name . ' ' . $adminUser->last_name, // Reutiliza o nome
                'bio' => 'Main barber and owner of the shop. Specialized in classic cuts.'
            ]);
        }
    }
}
