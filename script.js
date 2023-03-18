const btn = document.querySelector('.btnlogin');
const wrapper = document.querySelector('.wrapper');
const cerrarLogin = document.querySelector('.icon-close');

btn.addEventListener('click', ()=> {
    wrapper.classList.remove('wrapper-ocultar');
});

cerrarLogin.addEventListener('click', ()=> {
    wrapper.classList.add('wrapper-ocultar');
});