document.addEventListener("DOMContentLoaded", function() {
  console.log('sanity check');

var about = document.getElementById("about-bar");
var port = document.getElementById("port-bar");
var exp = document.getElementById("exp-bar");
var edu = document.getElementById("edu-bar");
console.log(window.pageYOffset);

about.className = 'scroll';

window.addEventListener('scroll', () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 0 && window.pageYOffset <= 850) {
    about.classList.add("scroll", "side-panel");
  } else {
    about.classList.remove("scroll");
    about.classList.add("side-panel");
  }
  if (window.pageYOffset > 850 && window.pageYOffset <= 4620) {
    port.className = 'scroll';
  } else {
    port.classList.remove("scroll");
    port.classList.add("side-panel");
  }
  if (window.pageYOffset > 4620 && window.pageYOffset <= 5460) {
    exp.className = 'scroll';
  } else {
    exp.classList.remove("scroll");
    exp.classList.add("side-panel");
  }
  if (window.pageYOffset > 5460) {
    edu.className = 'scroll';
  } else {
    edu.classList.remove("scroll");
    edu.classList.add("side-panel");
  }
});
});

