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

// Get Slider Itme | Array.from [ES6 Feature]
let sliderImges = Array.from(document.querySelectorAll('.slider-Container img'));
console.table(sliderImges);

// Get Number of Slide
let slidesCount = sliderImges.length;

// set Current Slide
let currentSlide = 1;

// Slide Number Element
let slideNumberElement = document.getElementById("slide-number");

// Previous and Next Buttons && prev Buttons
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// create The UL Element
let pagiationElement = document.createElement("ul");
// Set ID On Created UL Element
pagiationElement.setAttribute("id", "pagiation-ul");

// Create List Items Based On Slides Count
for (var i = 1; i <= slidesCount; i++) {
    // Create The LI
    let pagiationItem = document.createElement("li");

    // Set Custom Attribute
    pagiationItem.setAttribute("data-index", i);

    // Set Item Content
    pagiationItem.appendChild(document.createTextNode(i));

    // Append Items to The Main Ul List
    pagiationElement.appendChild(pagiationItem);
}

// Add The Creatd Ul Element to The page
document.getElementById("indicators").appendChild(pagiationElement)

// Get The New Created Ul
let pagiationCreatedUl = document.getElementById("pagiation-ul");

// Get pagiations Itme | Array.from [ES6 Feature]
let pagiationsBullets = Array.from(document.querySelectorAll('#pagiation-ul li'));

// Loop Through All Bullets Items
for (let i = 0; i < pagiationsBullets.length; i++) {
    pagiationsBullets[i].onclick = function () {
        currentSlide = parseInt(this.getAttribute('data-index'));
        theChecker();    
    }
}

// Trigger The Checker Function
theChecker();

// Next Slide Function
function nextSlide() {
    if (nextButton.classList.contains('disabled')) {
        // Do Nothing
        return false;
    }else {
        currentSlide++;
        theChecker();
    }
}
// previous Slide Function
function prevSlide() {
    if (prevButton.classList.contains('disabled')) {
        // Do Nothing
        return false;
    }else {
        currentSlide--;
        theChecker();
    }
}

function theChecker() {
    // Set The Slide Number
    slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

    // Remove All Active Classes
    removeAllActive();

    // Set Active Class On Current Slide
    sliderImges[currentSlide - 1].classList.add("active");

    // Set Active Class On Current Pagination Item
    pagiationCreatedUl.children[currentSlide - 1].classList.add("active");

    // Check if Current Slide is The First 
    if (currentSlide == 1) {
        // Add disabled Class on Previous Button
        prevButton.classList.add("disabled");
    } else {
        // Remove disabled Class From Previous Button
        prevButton.classList.remove("disabled");
    }

    // Check if Current Slide is The Last 
    if (currentSlide == slidesCount) {
        // Add disabled Class on next Button
        nextButton.classList.add("disabled");
    } else {
        // Remove disabled Class From next Button
        nextButton.classList.remove("disabled");
    }
}

// Remove All Active Class From imges and Pagination Bullests
function removeAllActive() {
    // Loop Through Imges
    sliderImges.forEach(function(img) {
        img.classList.remove("active");
    });
    // Loop Therough pagiation Bullets
    pagiationsBullets.forEach(function (bullets) {
        bullets.classList.remove("active");
    });
}