function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

/* Carousel */
const items = document.querySelector(".items");
const dots = document.querySelectorAll(".dot");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const total = items.children.length - 1;
const active = "active";
let current = 0;

const setActiveDot = () => {
    dots.forEach((button, i) => {
        i === current
            ? button.classList.add(active)
            : button.classList.remove(active);
    });
};

const scrollToCurrent = () => {
    items.style.transform = `translateX(${current * -100}%`;
    setActiveDot();
};

const scrollPrev = () => {
    if (current === 0) return;
    current--;
    scrollToCurrent();
};

const scrollNext = () => {
    if (current === total) return;
    current++;
    scrollToCurrent();
};

prev.addEventListener("click", scrollPrev);
next.addEventListener("click", scrollNext);

function MyFunction() {
    var dots = document.getElementById("dotss");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}