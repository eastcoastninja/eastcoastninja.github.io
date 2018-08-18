// let options = {
//   strings: ["Hi, my name is Julian."],
//   typeSpeed: 75
// }
// let typed = new Typed("", options);
// document.querySelectorAll(".typed-cursor")[0].style.display = "none"; 


var typed = new Typed(".display-4", {
  // Waits 1000ms after typing "First"
  strings: ["First ^1000 sentence.", "Second sentence."]
});