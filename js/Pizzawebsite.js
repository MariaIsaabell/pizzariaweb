const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

// Quando rolar a página, feche o menu, se aberto
window.onscroll = () => {
    if (navbar.classList.contains('open')) {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    }
}

// ScrollReveal para animações de rolagem
const sr = ScrollReveal({
    distance: '30px',
    duration: 2500,
    reset: true
});

sr.reveal('.home-text', { delay: 200, origin: 'left' });
sr.reveal('.home-img', { delay: 200, origin: 'right' });
sr.reveal('.container, .about, .menu, .contact', { delay: 200, origin: 'bottom' });

// Certifique-se de que o clique no link funcione
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(event) {
        // Evita qualquer interferência indesejada, como o preventDefault()
        // Se não houver nenhuma necessidade de interceptar o clique, remova ou ajuste esse código.
        // event.preventDefault(); // Certifique-se de que isso não está sendo chamado sem necessidade
    });
});
