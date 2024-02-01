console.log("Js has been loaded");

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");

// "event name", callback function
menuBtn.addEventListener("click", function() {
    //console.log("clcc");
    mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", function() {
    //console.log("clcc");
    mobileMenu.classList.remove("active");
});