let hamburger = document.getElementById('hamburger');
let navbar = document.querySelector('.main');
let closemenu = document.getElementById('closebtn');

function myFunction(){
    navbar.classList.toggle('active');
    hamburger.style.display="none";
    closemenu.classList.add('disable');

}
function btnClose(){
    navbar.classList.remove('active');
    
    hamburger.style.display="block";
    closemenu.classList.remove('disable');

}

hamburger.addEventListener('click',myFunction);
closemenu.addEventListener('click', btnClose);
