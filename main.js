let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
}

let menu = document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    menu.classList.toggle('active');
    search.classList.remove('active');
}
// Hide Menu And Search Box On Scroll
window.onscroll = () => {
    menu.classList.remove('active');
    search.classList.remove('active');
}

// Header 
let header = document.querySelector('header');

window.addEventListener('scroll' , () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', function() {
    var email = localStorage.getItem('userEmail');
    var userCircle = document.getElementById('userCircle');

    if (email) {
        var firstLetter = email.charAt(0).toUpperCase();
        userCircle.textContent = firstLetter;
        userCircle.style.display = 'flex';
    } else {
        userCircle.style.display = 'none';
    }
});
