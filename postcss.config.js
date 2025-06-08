module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

//Ele informa ao PostCSS para usar os plugins tailwindcss 
// (que é o próprio Tailwind) e autoprefixer. O Autoprefixer é ótimo porque 
// adiciona automaticamente os prefixos de navegador (como -webkit-, -moz-) ao seu CSS, 
// garantindo que o seu site funcione bem em diferentes navegadores sem que você precise se preocupar com isso.
// Isso é especialmente útil para garantir compatibilidade com navegadores mais antigos ou menos comuns.