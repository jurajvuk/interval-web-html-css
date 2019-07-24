// Navigacija, animacije
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    // Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = 'navLinkFade 0.5s ease forwards ' + (index / 7 + 0.5) + 's';
            }
        });
        burger.classList.toggle('toggle');
    });
}

navSlide();

/*
// Image slider, animacije
const carouselSlide = document.querySelector('.carousel-slide');
const carouselImage = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn'); 

// Counter
let counter = 1;
const size = carouselImage[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

// Event listeners for buttons
nextBtn.addEventListener('click', () => {
    if (counter >= carouselImage.length - 1)
        return;
    carouselSlide.style.transition = "transform 1s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// Event listeners for buttons
prevBtn.addEventListener('click', () => {
    if (counter <= 0)
        return;
    carouselSlide.style.transition = "transform 1s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImage[counter].id === "lastClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImage.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImage[counter].id === "firstClone") {
        carouselSlide.style.transition = "none";
        counter = carouselImage.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
*/


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function manSlideReset() {
    manSlide = false;
}

var manSlide = false;

if (manSlide) {
    setTimeout(manSlideReset, 500);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    } 
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; 
    dots[slideIndex-1].className += " active";
    manSlide = true;
}

var slideIndex = 0;
showSlidesAut();

function showSlidesAut() {
    if (manSlide) {
        manSlide = false;
        setTimeout(showSlidesAut, 5000); // Change image every 5 seconds
    }
    else {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        } 
        slides[slideIndex-1].style.display = "block"; 
        dots[slideIndex-1].className += " active";
        setTimeout(showSlidesAut, 5000); // Change image every 5 seconds
    }
    
}
