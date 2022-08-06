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


// let inp = document.getElementById("pass-id"),
//     btn = document.getElementById("pass-toggle");

// let isHide = true;
// const icon = btn.children[0];

// btn.onclick = (e) => {
//     e.preventDefault()
//     if (isHide) {
//         isHide = false;
//         inp.type = "text";
//         icon.classList.add("fa-eye");
//         icon.classList.remove('fa-eye-slash')
//     } else {
//         isHide = true
//         inp.type = "password";
//         icon.classList.add("fa-eye-slash");
//         icon.classList.remove("fa-eye");
//     };
// };