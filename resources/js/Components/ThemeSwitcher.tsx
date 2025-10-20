import { useEffect, useState } from 'react';

type Theme = 'barber-light' | 'barber-dark';

export default function ThemeSwitcher() {
    // Inicializa o tema lendo do localStorage, ou usa 'barber-light' como padrão
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem('theme') as Theme) || 'barber-light',
    );

    // Efeito para aplicar o tema na tag <html> e salvar no localStorage
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) =>
            prevTheme === 'barber-light' ? 'barber-dark' : 'barber-light',
        );
    };

    return (
        <button
            onClick={toggleTheme}
            // Usando classes de utilidade do Tailwind/DaisyUI
            className="btn btn-ghost btn-circle"
            aria-label="Mudar tema"
        >
            {/* Ícone de Sol (Tema Claro) */}
            <svg
                className={`h-6 w-6 ${theme === 'barber-light' ? 'swap-on' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 12a5 5 0 100-10 5 5 0 000 10z"
                />
            </svg>

            {/* Ícone de Lua (Tema Escuro) */}
            <svg
                className={`h-6 w-6 ${theme === 'barber-dark' ? 'swap-on' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
            </svg>
        </button>
    );
}
