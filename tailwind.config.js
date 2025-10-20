import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.tsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
                // Você pode adicionar uma fonte serifada elegante para títulos
                // serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
            },
        },
    },

    plugins: [
        forms,
        // Adiciona o DaisyUI
        require('daisyui'),
    ],

    // Configuração do DaisyUI
    daisyui: {
        themes: [
            {
                // Nosso tema CLARO
                'barber-light': {
                    "primary": "#3d4451",    // Um carvão/chumbo
                    "secondary": "#d4af37",  // Um dourado/âmbar
                    "accent": "#b91c1c",     // Um vermelho (clássico de barbearia)
                    "neutral": "#f3f4f6",    // Cinza claro
                    "base-100": "#ffffff",   // Fundo branco
                    "info": "#0ea5e9",
                    "success": "#22c55e",
                    "warning": "#facc15",
                    "error": "#ef4444",
                },
                // Nosso tema ESCURO
                'barber-dark': {
                    "primary": "#d4af37",    // Dourado vira primário no escuro
                    "secondary": "#5a677d",  // Um azul/cinza mais claro
                    "accent": "#dc2626",     // Vermelho mais vivo
                    "neutral": "#2a323c",    // Um cinza escuro
                    "base-100": "#191d24",   // Fundo quase preto (couro/madeira escura)
                    "info": "#0ea5e9",
                    "success": "#22c55e",
                    "warning": "#facc15",
                    "error": "#ef4444",
                },
            },
            // Se você quiser, pode manter os temas padrão também
            // "light",
            // "dark"
        ],
        // Definimos o tema padrão (ele será aplicado se o switcher não for usado)
        defaultTheme: "barber-light",
        // Usamos o 'data-theme' para trocar o tema
        themeRoot: ":root",
    },
};
