<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Conforme o plano: Tabela 'staff' (equipe)
        Schema::create('staff', function (Blueprint $table) {
            $table->uuid('id')->primary(); // Chave primária UUID

            // Chave estrangeira para a tabela 'users'
            $table->foreignUuid('user_id')
                ->constrained('users') // Garante que o user_id exista na tabela 'users'
                ->onDelete('cascade'); // Se o usuário for deletado, deleta o staff

            $table->string('display_name');
            $table->text('bio')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('staff');
    }
};
