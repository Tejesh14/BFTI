const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('open');
    if(navLinks.classList == 'nav-links open'){
        hamburger.style.position = 'fixed';
    }else{
        hamburger.style.position = 'absolute';
    }
    links.forEach(link=>{
        link.classList.toggle('fade');
    })
})