// script.js

// Exemplo de rolagem suave para links de âncora
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Futuramente, você pode adicionar:
// - Um menu hambúrguer responsivo (com CSS e JS para toggle)
// - Carrossel de imagens na galeria
// - Validação de formulário