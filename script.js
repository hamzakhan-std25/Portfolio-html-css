console.log('Script loaded successfully!');


// Toggle Menu Bar
// This code toggles the visibility of the navigation bar when the menu icon is clicked.
const barMenu = document.getElementById('barMenu');
const navBar = document.querySelector(".menu");

barMenu.addEventListener('click', () => {
    navBar.classList.toggle('active');
    barMenu.classList.toggle('active');
    console.log('Menu bar clicked!');

});

// Counter Animation


const counters = document.querySelectorAll('.counter');
let started = false;  // Flag to check if the counter has started preventing multiple triggers

const runCounter = () => {
    counters.forEach(counter => {
        counter.innerText = "0";
        const target = +counter.getAttribute("data-target");
        const duration = 2000; // 2 seconds total animation
        const increment = Math.ceil(target / (duration / 16)); // 60fps ~ 16ms/frame

        const updateCount = () => {
            const current = +counter.innerText;
            if (current < target) {
                counter.innerText = current + increment;
                setTimeout(updateCount, 16); // next update after 16ms
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
};

// Intersection Observer to trigger counter animation when in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
            started = true; // Prevent further animations
            runCounter();
        }
    });
},
    { threshold: 0.5 }
);

observer.observe(document.querySelector('#stats'));


function check(){
    n=document.getElementById('navbar');
console.log('chicking..')
console.log(n)

const observer = new IntersectionObserver
}


