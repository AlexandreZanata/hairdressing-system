<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids; // <-- 1. Adicione esta linha
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Staff extends Model
{
    use HasFactory;
    use HasUuids; // <-- 2. Adicione esta linha

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'user_id',
        'display_name',
        'bio',
    ];

    /**
     * Define o relacionamento: Um Staff (membro da equipe) pertence a um User (usuário).
     */
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
