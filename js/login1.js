
let inp = document.getElementById("pass-id"),
    btn = document.getElementById("pass-toggle");

let isHide = true;
const icon = btn.children[0];

btn.onclick = (e) => {
    e.preventDefault()
    if (isHide) {
        isHide = false;
        inp.type = "text";
        icon.classList.add("fa-eye");
        icon.classList.remove('fa-eye-slash')
    } else {
        isHide = true
        inp.type = "password";
        icon.classList.add("fa-eye-slash");
        icon.classList.remove("fa-eye");
    };
};