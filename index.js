const ham = $(".ham");
const close = $(".close");
const nav = $("nav");
var hamOpen = false;

ham.click(() => {
  ham.css("display", "none");
  close.css("display", "block");
  nav.addClass("navbar-res");
  hamOpen = true;
});

close.click(() => {
  ham.css("display", "block");
  close.css("display", "none");
  nav.removeClass("navbar-res");
  hamOpen = false;
});

$(window).resize(() => {
  if ($(window).width() > 483) {
    ham.css("display", "none");
    close.css("display", "none");
  } else {
    if (hamOpen) {
      close.css("display", "block");
    } else {
      ham.css("display", "block");
    }
  }
});
