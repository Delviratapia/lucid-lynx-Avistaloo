/*MENU MOBILE*/

document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden");
}

/*LOGIN-REGISTER-CREATE*/

const modal = document.querySelector('.modal');
const showModal = document.querySelector('.show-modal');
const closeModal = document.querySelectorAll('.close-modal');

showModal.addEventListener('click', function (){
    modal.classList.remove('hidden')
});

closeModal.forEach(close => {
    close.addEventListener('click', function (){
        modal.classList.add('hidden')
    });
});

const modalRegister = document.querySelector('.modal-register');
const showModalRegister = document.querySelector('.show-modal-register');
const closeModalRegister = document.querySelectorAll('.close-modal-register');

showModalRegister.addEventListener('click', function (){
    modalRegister.classList.remove('hidden')
});

closeModalRegister.forEach(close => {
    close.addEventListener('click', function (){
        modalRegister.classList.add('hidden')
    });
});

const modalUnirse = document.querySelector('.modal-unirse');
const showModalUnirse = document.querySelector('.show-modal-unirse');
const closeModalUnirse = document.querySelectorAll('.close-modal-unirse');

showModalUnirse.addEventListener('click', function (){
    modalUnirse.classList.remove('hidden')
});

closeModalUnirse.forEach(close => {
    close.addEventListener('click', function (){
        modalUnirse.classList.add('hidden')
    });
});

/*MODAL CONTACT*/

const modalContact = document.querySelector('.modal-contact');
const showModalContact = document.querySelector('.show-modal-contact');
const closeModalContact = document.querySelectorAll('.close-modal-contact');

showModalContact.addEventListener('click', function (){
    modalContact.classList.remove('hidden')
});

closeModalContact.forEach(close => {
    close.addEventListener('click', function (){
        modalContact.classList.add('hidden')
    });
});