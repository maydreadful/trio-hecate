
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Adiciona todos os arquivos HTML na raiz do projeto
    // Você pode adicionar mais caminhos aqui, ex: "./src/**/*.{js,ts,jsx,tsx}" se tiver arquivos JS/TS com classes Tailwind
  ],
  theme: {
    extend: {
      colors: {
        'brown-dark': '#8B4513',    // Marrom mais escuro para elementos principais
        'brown-medium': '#A0522D',  // Siennacolor para detalhes e textos secundários
        'gold-light': '#FFD700',    // Dourado para destaques e botões
        'gold-dark': '#DAA520',     // Dourado mais escuro para hover de botões
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
        // Se quiser uma fonte mais "belly dance", você pode importar do Google Fonts e adicioná-la aqui.
        // Ex: 'serif': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}