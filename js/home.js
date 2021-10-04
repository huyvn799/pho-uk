// Transition "pho-title-logo" when scroll up or down
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    // $(".main_links-h").addClass("fixed-h");
    $(".main_links-h").css("opacity", "1");
    // $(".fixed-h.nav").css("z-index", "0");


    if (currentScrollPos === 0) {
      document.getElementById("pho_title-h").style.top = "165px";
      document.getElementById("pho_title-h").style.opacity = "1";
    }
  } else {
    document.getElementById("pho_title-h").style.top = "120px";
    document.getElementById("pho_title-h").style.opacity = "0";
    // $(".main_links-h").removeClass("fixed-h");    
    $(".main_links-h").css("opacity", "0");
    // $(".fixed-h.nav").css("z-index", "-1");
  }
 
  
  prevScrollpos = currentScrollPos;

  // console.log(`current scroll pos relative to edge window: ${currentScrollPos}`);

  var contentSections = $("section.col_content-h").toArray();

  // console.log(contentSections);

  for (let i = 0; i < contentSections.length; i++) {

    const boundTop = contentSections[i].getBoundingClientRect().top;
    const offsetTop = contentSections[i].offsetTop;

    // lấy từ cạnh top của element so với cạnh top của window (sẽ thay đổi khi scroll)
    // console.log(`${i} bound top : ${boundTop} `);

    // lấy từ cạnh top của element so với cạnh top của window (giá trị cứng) (ko sẽ thay đổi khi scroll)
    // console.log(`${i} offset top : ${offsetTop}`);

    // console.log(`${i} offset top - bound top : ${contentSections[0].offsetTop - boundTop}`);

    if (boundTop <= 630) {

      switch (i) {
        case 0: {
          $(".background_image-h img").attr("src", "../images/home/Nutrition-Single-Background2.jpg");
          break;
        }
        case 1: {
          $(".background_image-h img").attr("src", "../images/home/background-2D2E30-1.jpg");
          break;
        }
        case 2: {
          $(".background_image-h img").attr("src", "../images/home/Home-Background-2.jpg");
          break;
        }
        case 3: {
          $(".background_image-h img").attr("src", "../images/home/Menu-Background.jpg");
          break;
        }
      }

      $(".background .background_image-h").css("top", `${-boundTop * 0.05}px`)
    } 
  }

}


// Show header after loaded
var header = document.querySelector("header");
window.onunload = function () {
  header.style.opacity = "0";
}

// Click vào button open nav menu 
$(".main_links-h a:last-child").click(function() {
  $("#modal_nav_menu-h .nav_right-h").addClass("open_nav_menu-h");
});

