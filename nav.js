const hamburger = document.getElementById("hamburger");
const links_container = document.getElementById("links-container"); 
const up = document.getElementById("up");
const down = document.getElementById("down");
const links = document.querySelectorAll(".link");

links.forEach(link=>{
    link.addEventListener("click",()=>{
        links_container.classList.remove("menu");
    });
})


document.addEventListener('DOMContentLoaded',()=>{
    up.classList.add("up");
    down.classList.add("down");
}); 

hamburger.addEventListener("click",()=>{
    links_container.classList.toggle("menu");
});

const close = document.getElementById("close");
close.addEventListener("click",()=>{
    links_container.classList.remove("menu");
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