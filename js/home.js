// Transition "pho-title-logo" when scroll up or down
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    if (currentScrollPos === 0) {
      document.getElementById("pho_title-h").style.top = "165px";
    document.getElementById("pho_title-h").style.opacity = "1";
    }
  } else {
    
    document.getElementById("pho_title-h").style.top = "120px";
    document.getElementById("pho_title-h").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;

  console.log(currentScrollPos);
}

// Fade header when loaded
var header = document.querySelector("header");
window.onunload = function () {
  header.style.opacity = "0";
}