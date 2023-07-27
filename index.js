const toggle = document.getElementById("change");
const body = document.querySelector("body");

function myFunction() {
  var element = document.body;
  document.documentElement.setAttribute("data-bs-theme", "dark");
}

toggle.addEventListener("click", function () {
  this.classList.toggle("bi-moon");
  if (this.classList.toggle("bi-brightness-high-fill")) {
    (body.style = "data-bs-theme"), "light";
  } else {
    (body.style = "data-bs-theme"), "dark";
  }
});

/*function myFunction() {
  var element = document.body;
  document.documentElement.setAttribute("data-bs-theme", "dark");
} */
