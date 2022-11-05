let menu = document.querySelector("#menu-icon");
let nav = document.querySelector(".navlist");

menu.onclick = () => {
     menu.classList.toggle('box-x');
     nav.classList.toggle('active');
};
window.onscroll = () => {
     menu.classList.remove('box-x');
     nav.classList.remove('active');
};




 
 
   