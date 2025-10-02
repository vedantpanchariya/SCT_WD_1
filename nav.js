const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click",()=>{
    const links = document.getElementById("links-container");   
    links.classList.toggle("menu");
});
window.addEventListener('scroll',function(){
    const navbar = document.querySelector(".navbar");
    const container = document.querySelector(".container");
    if(window.scrollY > 30){
        navbar.classList.add("scrolled");
        container.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
        container.classList.remove("scrolled");
    }
});