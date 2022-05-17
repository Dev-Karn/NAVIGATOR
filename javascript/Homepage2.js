// Dropdown for Left Nav Menu at 800px

const leftDropdown = document.querySelector("#left-dropdown");
const hamburger1 = document.querySelector("#menu1");

document.addEventListener('click', applyActive => {
    const checkHamburger1 = applyActive.target.matches('#menu1');
    const checkbars = applyActive.target.matches('#barsAt800px');
    const checkMenuPanel = applyActive.target.matches('#navMenuAt800px');
    if (checkHamburger1 == true || checkbars == true) {
        leftDropdown.classList.toggle("activve");
        hamburger1.classList.toggle("icon");
    }

    if (checkbars == false && checkHamburger1 == false && checkMenuPanel == false) {
        leftDropdown.classList.remove("activve");
        hamburger1.classList.remove("icon");
    }
})

// Dropdown for Left Nav Menu at 375px

const fullDropdown = document.querySelector("#full-dropdown");
const hamburger2 = document.querySelector("#menu2");

document.addEventListener('click', applyActive => {
    const checkHamburger2 = applyActive.target.matches('#menu2');
    const checkbars = applyActive.target.matches('#barsAt375px');
    const checkMenuPanel = applyActive.target.matches('#navMenuAt375px');
    if (checkHamburger2 == true || checkbars == true) {
        fullDropdown.classList.toggle("activve");
        hamburger2.classList.toggle("icon");
    }

    if (checkbars == false && checkHamburger2 == false && checkMenuPanel == false) {
        fullDropdown.classList.remove("activve");
        hamburger2.classList.remove("icon");
    }
})

// Dropdown for Right Nav Menu/Login Area at 800px

function onClicklogo() {
    document.getElementById("right-dropdown").classList.toggle("login-dropdown");
}

// ------------------ Image Slider at the beginning --------------------------//

const slideImage = document.querySelectorAll(".slide-image");
const slideContainer = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");
const textAnimation = document.querySelectorAll('#textAnimation');

let numberOfImages = slideImage.length;
let currentSlide = 0;

// Set Text Animation

function setTextToAnimate(currentSlide) {

    // Set Text Animation for Text on Slide Image

    let currentAnimation = document.querySelector('.slider-image-text.slider-text-animation');
    currentAnimation.classList.remove('slider-text-animation');
    textAnimation[currentSlide].classList.add("slider-text-animation");
}

// Set up the slider

function init() {
    /*   
      slideImage[0] = 0
      slideImage[1] = 100%
      slideImage[2] = 200%
      */

    slideImage.forEach((img, i) => {
        img.style.left = i * 100 + "%";
    });

    textAnimation[0].classList.add("slider-text-animation");
    slideImage[0].classList.add("active");

    createNavigationDots();
}

init();

// Create navigation dots

function createNavigationDots() {
    for (let i = 0; i < numberOfImages; i++) {
        const dot = document.createElement("div");
        dot.classList.add("single-dot");
        navigationDots.appendChild(dot);

        dot.addEventListener("click", () => {
            goToSlide(i);
        });
    }

    navigationDots.children[0].classList.add("active");
}

// Next Button

nextBtn.addEventListener("click", () => {
    if (currentSlide >= numberOfImages - 1) {
        goToSlide(0);
        return;
    }

    currentSlide++;
    goToSlide(currentSlide);
});

// Previous Button

prevBtn.addEventListener("click", () => {
    if (currentSlide <= 0) {
        goToSlide(numberOfImages - 1);
        return;
    }

    currentSlide--;
    goToSlide(currentSlide);
});

// Go To Slide

function goToSlide(slideNumber) {
    setTextToAnimate(slideNumber);
    let slideWidth = slideImage[0].clientWidth;
    slideContainer.style.transform =
        "translateX(-" + slideWidth * slideNumber + "px)";

    currentSlide = slideNumber;

    setActiveClass();
}

// Automatic Go To Slide

setInterval(() => {
    currentSlide += 1;
    if (currentSlide >= numberOfImages) {
        currentSlide = 0;
    }

    goToSlide(currentSlide);

}, 3500)

// Set Active Class

function setActiveClass() {
    // Set active class for Slide Image

    let currentActive = document.querySelector(".slide-image.active");
    currentActive.classList.remove("active");
    slideImage[currentSlide].classList.add("active");

    //   set active class for navigation dots

    let currentDot = document.querySelector(".single-dot.active");
    currentDot.classList.remove("active");
    navigationDots.children[currentSlide].classList.add("active");
}

// ------------------ Image Slider at the beginning --------------------------//