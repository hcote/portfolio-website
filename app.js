document.addEventListener("DOMContentLoaded", function() {

var about = document.getElementById("about-bar");
var port = document.getElementById("port-bar");
var exp = document.getElementById("exp-bar");
var edu = document.getElementById("edu-bar");
var arrow = document.getElementsByClassName("fa-angle-double-down")[0]

about.className = 'scroll';

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= 10) {
    arrow.classList.add('hide');
  } else {
    arrow.classList.remove('hide');
  }
  if (window.pageYOffset >= 0 && window.pageYOffset <= 850) {
    about.classList.add("scroll", "side-panel");
  } else {
    about.classList.remove("scroll");
    about.classList.add("side-panel");
  }
  if (window.pageYOffset > 850 && window.pageYOffset <= 3800) {
    port.className = 'scroll';
  } else {
    port.classList.remove("scroll");
    port.classList.add("side-panel");
  }
  if (window.pageYOffset > 3800 && window.pageYOffset <= 4810) {
    exp.className = 'scroll';
  } else {
    exp.classList.remove("scroll");
    exp.classList.add("side-panel");
  }
  if (window.pageYOffset > 4810) {
    edu.className = 'scroll';
  } else {
    edu.classList.remove("scroll");
    edu.classList.add("side-panel");
  }
});
});

