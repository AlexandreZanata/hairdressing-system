// Copie e cole este conteúdo todo no arquivo

// Nossos tipos de Models (baseados nas migrations)
export type User = {
    id: string; // É um UUID (string)
    first_name: string;
    last_name: string;
    email: string;
    phone?: string; // O '?' significa que é opcional (nullable)
    role: 'admin' | 'staff' | 'client'; // Define os papéis
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
};

export type Service = {
    id: string; // UUID
    name: string;
    description?: string;
    duration_minutes: number;
    price: string; // Decimais vêm como string do JSON para segurança
    created_at: string;
    updated_at: string;
};

export type Staff = {
    id: string; // UUID
    user_id: string;
    display_name: string;
    bio?: string;
    created_at: string;
    updated_at: string;
    user?: User; // Para quando carregarmos o relacionamento
};

// Tipos padrão do Breeze/Inertia
// Nós dizemos que 'auth.user' agora é o nosso tipo 'User'
export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>,
> = T & {
    auth: {
        user: User;
    };
    // Podemos adicionar aqui propriedades que sempre virão do backend
    flash: {
        success?: string;
        error?: string;
    };
};
