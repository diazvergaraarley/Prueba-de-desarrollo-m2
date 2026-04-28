const date = new Date()
document.getElementById("year").innerText = date.getFullYear()

// Write your Js code here 

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});