let menuIcon = document.querySelector("header .icon .menu-icon"),
menuIcon1 = document.querySelector("header .icon .menu-icon span:nth-child(1)"),
menuIcon2 = document.querySelector("header .icon .menu-icon span:nth-child(2)"),
menuIcon3 = document.querySelector("header .icon .menu-icon span:nth-child(3)"),
menu = document.querySelector("header .menu"),
    counter = 0;
    
    menuIcon.onclick = function () {
    if (counter == 0) {
        menu.style.display = "block";

        menuIcon1.style.animationName = "close-top";
        menuIcon3.style.animationName = "close-bottom";
        
        menuIcon2.style.transtion = "0s";
        menuIcon2.style.opacity = 0;
        
        counter = 1;
    } else {
        menu.style.display = "none";
        
        menuIcon1.style.animationName = "close";
        menuIcon3.style.animationName = "close";
        
        menuIcon2.style.transtion = "0s";
        menuIcon2.style.opacity = 1;
        
        counter = 0
    }
    
}  
// ===

let sliderImges = Array.from(document.querySelectorAll('.slider-Container img'));
console.table(sliderImges);

let slidesCount = sliderImges.length;

let currentSlide = 1;

let slideNumberElement = document.getElementById("slide-number");

let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

let pagiationElement = document.createElement("ul");
pagiationElement.setAttribute("id", "pagiation-ul");

for (var i = 1; i <= slidesCount; i++) {
    let pagiationItem = document.createElement("li");

    pagiationItem.setAttribute("data-index", i);

    pagiationItem.appendChild(document.createTextNode(i));

    pagiationElement.appendChild(pagiationItem);
}

document.getElementById("indicators").appendChild(pagiationElement)

let pagiationCreatedUl = document.getElementById("pagiation-ul");

let pagiationsBullets = Array.from(document.querySelectorAll('#pagiation-ul li'));

for (let i = 0; i < pagiationsBullets.length; i++) {
    pagiationsBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();    
    }
}

theChecker();

function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        return false;
    }else {
        currentSlide++;
        theChecker();
    }
}
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        return false;
    }else {
        currentSlide--;
        theChecker();
    }
}

function theChecker() {
    slideNumberElement.textContent = 'Image ' + (currentSlide);

    removeAllActive();

    sliderImges[currentSlide - 1].classList.add("active");

    pagiationCreatedUl.children[currentSlide - 1].classList.add("active");

    if (currentSlide == 1) {
        prevButton.classList.add("disabled");
    } else {
        prevButton.classList.remove("disabled");
    }

    if (currentSlide == slidesCount) {
        nextButton.classList.add("disabled");
    } else {
        nextButton.classList.remove("disabled");
    }
}

function removeAllActive() {
    sliderImges.forEach(function(img) {
        img.classList.remove("active");
    });
    pagiationsBullets.forEach(function (bullets) {
        bullets.classList.remove("active");
    });
}