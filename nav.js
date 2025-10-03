const hamburger = document.getElementById("hamburger");
const links = document.getElementById("links-container"); 
hamburger.addEventListener("click",()=>{
    links.classList.toggle("menu");
});
const close = document.getElementById("close");
close.addEventListener("click",()=>{
    links.classList.remove("menu");
});

window.addEventListener('scroll',function(){
    const navbar = document.querySelector(".navbar");
    const container = document.querySelector(".container");
    if(window.scrollY > 30){
        navbar.classList.add("scrolled");
        container.classList.add("scrolled");
        hamburger.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
        container.classList.remove("scrolled");
        hamburger.classList.remove("scrolled");
    }
});