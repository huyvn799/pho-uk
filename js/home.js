
// Transition "pho-title-logo" when scroll up or down
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("pho-title").style.top = "165px";
    document.getElementById("pho-title").style.opacity = "1";

  } else {
    document.getElementById("pho-title").style.top = "120px";
    document.getElementById("pho-title").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
}