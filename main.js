let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500 ,
    delay: 400,
    reset: true
})
sr.Reveal('.text',{delay: 200, origin: 'top'})
sr.Reveal('.form-container form',{delay: 800, origin: 'left'})
sr.Reveal('.heading',{delay: 800, origin: 'top'})
sr.Reveal('.ride-container .box',{delay: 600, origin: 'top'})
sr.Reveal('.services-container .box',{delay: 600, origin: 'top'})
sr.Reveal('.about-container .box',{delay: 600, origin: 'top'})
sr.Reveal('.reviews-container',{delay: 600, origin: 'top'})
sr.Reveal('.newsletter .box',{delay: 400, origin: 'bottom'})
