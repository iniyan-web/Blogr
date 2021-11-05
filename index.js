const ham = $(".ham");
const close = $(".close");
const navbar = $(".navbar");

ham.click(() => {
  ham.css("display", "none");
  close.css("display", "block");
  navbar.css("display", "block");
});

close.click(() => {
  ham.css("display", "block");
  close.css("display", "none");
  navbar.css("display", "none");
});
