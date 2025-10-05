const hamburger = document.getElementById("hamburger");
const links_container = document.getElementById("links-container"); 
const links = document.querySelectorAll(".link");
const products = document.querySelectorAll("#products");

const observer = new IntersectionObserver((element)=>{
    element.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
},{
    threshold: 0.15
});
products.forEach(product=>observer.observe(product));


if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

links.forEach(link=>{
    link.addEventListener("click",()=>{
        links_container.classList.remove("menu");
    });
});

document.addEventListener('DOMContentLoaded',()=>{

    const up = document.getElementById("up");
    const down = document.getElementById("down");

    up.classList.remove("up");
    down.classList.remove("down");

    void up.offsetWidth;
    void down.offsetWidth

    setTimeout(()=>{    

        up.classList.add("up");
        down.classList.add("down");

    },100);
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
    const container = document.querySelector("#container");
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
