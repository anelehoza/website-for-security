alert('test');
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

navToggle.addEventListener('click', (e)=>{
    e.preventDefault();
    alert('hey')
    navMenu.classList.add('show')
})
navClose.addEventListener('click', ()=>{
    alert('hey')
    navMenu.remove('show')
})
alert('testing')