

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