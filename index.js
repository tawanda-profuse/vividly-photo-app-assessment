var root = document.querySelector(":root");
var themeButton = document.getElementById("themeBtn");
var navbar = document.querySelector(".navbar");
var svg = document.querySelectorAll("svg path");
var navButtons = document.querySelectorAll(".nav-buttons");
var sideIcons = document.querySelectorAll(".side-icons");
var openMenu = document.querySelector(".open-menu");
var firstSideIcon = document.querySelector(".side-icons div:first-child");
var content = document.getElementById("content");
var leftButton = document.querySelector(".left-button");
var aside = document.querySelector("aside");
var undoBtn = document.getElementById("undo");
var avatar = document.querySelector(".avatar");
var dialog = document.getElementById("user");
var dialogBtn = document.querySelector("#user button");
var callAI = document.getElementById("callAi");
var AGI = document.getElementById("agi");
var generateBtn = document.getElementById("generate");
var closeAI = document.getElementById("closeAI");
var processImg = document.getElementById("process");
var promptText = document.querySelector("#agi form textarea");

let toggled = false;

function changeTheme() {
    if (toggled) {
        toggled = false;
    } else {
        toggled = true;
    }
}

themeButton.addEventListener("click", function () {
    changeTheme();

    if (toggled) {
        themeButton.innerHTML = '<i class="fas fa-sun"> theme';
        navbar.style.backgroundColor = "var(--vividly-dark)";
        svg.forEach(element => {
            element.style.fill = "var(--vividly-light)"
        });
        navButtons.forEach(element => {
            element.style.color = "var(--vividly-light)"
        });
        sideIcons.forEach(icon => {
            icon.style.backgroundColor = "var(--vividly-purple)";
            icon.style.color = "var(--vividly-light)";
        });
        openMenu.style.backgroundColor = "var(--vividly-purple-dark)";
        openMenu.style.color = "var(--vividly-light)";
        firstSideIcon.style.backgroundColor = "var(--vividly-purple-dark)";
        content.style.backgroundColor = "var(--vividly-gray)";
    } else {
        themeButton.innerHTML = '<i class="fas fa-moon"> theme';
        navbar.style.backgroundColor = "var(--vividly-pale)";
        svg.forEach(element => {
            element.style.fill = "black"
        });
        navButtons.forEach(element => {
            element.style.color = "var(--vividly-dark)"
        });
        sideIcons.forEach(icon => {
            icon.style.backgroundColor = "var(--vividly-pale)";
            icon.style.color = "var(--vividly-dark)";
        });
        openMenu.style.backgroundColor = "var(--vividly-purple-light)";
        firstSideIcon.style.backgroundColor = "var(--vividly-light)";
        openMenu.style.color = "var(--vividly-dark)";
        content.style.backgroundColor = "var(--vividly-semi-white)";
    }
});


let toggle = false;
function openDrawer() {
    if (toggle) {
        toggle = false
    } else {
        toggle = true;
    }
}

leftButton.addEventListener("click", function () {
    openDrawer();

    if (toggle) {
        openMenu.style.display = "none";
        if (toggled) {
            firstSideIcon.style.backgroundColor = "var(--vividly-purple)";
        } else {
            firstSideIcon.style.backgroundColor = "var(--vividly-pale)";
        }
        leftButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
    } else {
        openMenu.style.display = "flex";
        if (toggled) {
            firstSideIcon.style.backgroundColor = "var(--vividly-purple-dark)";
        } else {
            firstSideIcon.style.backgroundColor = "var(--vividly-light  )";
        }
        leftButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
    }
});

avatar.addEventListener("click", function () {
    dialog.setAttribute("open", true);
});

dialogBtn.addEventListener("click", function () {
    dialog.close();
});

undoBtn.addEventListener("click", function () {
    window.location.reload();
});

callAI.addEventListener("click", function () {
    AGI.setAttribute("open", true);
});

generateBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (promptText.value != "") {
        processImg.classList.add("rotate");
        setTimeout(() => {
            alert("Image generation in progress...");
        }, 2000);
        setTimeout(() => {
            AGI.close();
        }, 3000);
    }
});

closeAI.addEventListener("click", function () {
    AGI.close();
});

