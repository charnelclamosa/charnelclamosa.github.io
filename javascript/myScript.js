// Transition
// Detect request animation frame
var scroll = window.requestAnimationFrame || function(callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');
const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });
gsap.registerPlugin(ScrollTrigger);
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const about = document.querySelector('.about-section');
const footer = document.querySelector('.footer');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

navLinks.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

timeline.to(".intro-text", { y: "30%", duration: 0.5, stagger: 0.25 });
timeline.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1.5 });
gsap.from(".scroll", {
    scrollTrigger: { trigger: ".scroll", start: 'top 80%', toggleActions: "restart none none reset" },
    y: 50,
    stagger: 0.5,
    duration: 1,
    ease: 'power1.in'
});


function loop() {
    Array.prototype.forEach.call(elementsToShow, function(element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        }
    });
    scroll(loop);
}

// Call the loop for the first time
loop();

function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0 &&
            rect.bottom >= 0) ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

// Back to top button
var myButton = document.getElementById('goTop');
window.onscroll = function() { scrollTrigger() };

function scrollTrigger() {
    if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
        myButton.style.display = 'block';
    } else {
        myButton.style.display = 'none';
    }
}

function goTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function getYear() {
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById('year').innerHTML = year;
}
getYear();