let blogdropdown = document.querySelector(".blogdropdown");
let count = 0;
blogdropdown.addEventListener('click', function(){
 
    if (count == 0){
    document.querySelector(".dropdown-content").style.display = "block";
    count = 1;
    } else {
    count = 0;
    document.querySelector(".dropdown-content").style.display = "none";
    }
});

let navbar = document.querySelector(".navbar");
navbar.addEventListener('click', function(){
    document.querySelector(".box").style.display = "block";
});
let closebutton = document.querySelector(".fa-square-xmark");
closebutton.addEventListener('click', function(){
    document.querySelector(".box").style.display = "none";
});