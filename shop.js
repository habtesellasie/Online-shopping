const cartCount = document.querySelector(".cart-count");
const btnClear = document.querySelector(".clear-it");
const countNum = document.querySelector(".count");
const addToCart = document.querySelectorAll(".cart-add-btn");
const loader = document.querySelector(".load-it");

window.addEventListener("load", function () {
  loader.style.overflow = "hidden";
  loader.style.display = "none";
});

let counter = parseInt(localStorage.getItem("counter")) || 0;

// cartCount.addEventListener("click", () => {
//   popup.classList.toggle("active");
// });

// btnClose.addEventListener("click", () => {
//   popup.classList.remove("active");
// });

let countFine = localStorage.getItem("countFine", "count");

btnClear.addEventListener("click", () => {
  counter = 0;
  countNum.textContent = counter;
  localStorage.setItem("counter", counter.toString());
});

addToCart.forEach((add) => {
  add.addEventListener("click", () => {
    counter++;
    countNum.textContent = counter;
    localStorage.setItem("counter", counter.toString());
  });
});
countNum.textContent = counter;
