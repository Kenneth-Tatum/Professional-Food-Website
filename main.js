var slides = document.querySelectorAll('.slide')
var btns = document.querySelectorAll('.btn')
let currentSlide = 1;

//    Javascript for image slider manual navigation
var manualNav = function (manual) {
 slides.forEach((slide) => {
     slide.classList.remove('active');
 });
 btns.forEach((btn) => {
     btn.classList.remove('active');
 });
 slides[manual].classList.add('active')
 btns[manual].classList.add('active')
}
btns.forEach((btn, i) => {
 btn.addEventListener("click", () => {
     manualNav(i);
     currentSlide = i;
 })
})


///import images of chefs with there data usuing javascript
var chefs = [
    {
        name: "Chef 1",
        img: "images/chef1.jpg",

    },
    {
        name: "Chef 2",
        img: "images/chef2.jpg",

    },

    {
        name: "Chef 3",
        img: "images/chef3.jpg",


    },
]