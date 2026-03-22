// AOS Init
AOS.init({duration:1000, once:true});
//menu toggle
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () =>{
    menu.classList.toggle("active");

    // icon change
    if (hamburger.classList.contains("bx-menu")) {
        hamburger.classList.remove("bx-menu");
        hamburger.classList.add("bx-x");
    } else {
        hamburger.classList.remove("bx-x");
        hamburger.classList.add("bx-menu");
    }
})

document.addEventListener("click", (e) => {

    // menu & hamburger
    const menu = document.getElementById("menu");
    const hamburger = document.getElementById("hamburger");

    // 👉 click menu அல்லது hamburger இல்லையென்றால்
    if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        
        menu.classList.remove("active");

        // icon reset
        hamburger.classList.remove("bx-x");
        hamburger.classList.add("bx-menu");
    }

});



// testimonial slide
new Swiper(".testimonialSwiper",{
    slidesPerView: 3,
    spaceBetween: 30,
    loop:true,
    autoplay:{
        delay:3000,
    },
    breakpoints:{
        0:{slidesPerView:1},
        768:{slidesPerView:2},
        1024:{slidesPerView:3}
    }
})




