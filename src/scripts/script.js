let menuHamburguer = document.getElementById('toggleBtn')
let menuNavegacao = document.querySelector('nav')

menuHamburguer.addEventListener('click', ()=>{
    menuHamburguer.classList.toggle('burguer')
    menuNavegacao.classList.toggle('hidden')
})