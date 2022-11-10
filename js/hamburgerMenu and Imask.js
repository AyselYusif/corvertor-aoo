// !HAMBURGER MENU
const hamburgerLines = document.querySelector(".hamburger-lines");
const navUl = document.querySelector(".nav-ul");
const icon = document.getElementById("icon");
console.log(icon.innerHTML);

hamburgerLines.addEventListener("click", () => {
  navUl.classList.toggle("show");
  icon.classList.remove('fa-bars"');
  icon.classList.toggle("fa-x");
});

// ! IMASK
var numberMask = IMask(selectBox, {
  mask: Number, // enable number mask
  // other options are optional with defaults below
  scale: 6, // digits after point, 0 for integers
  signed: false, // disallow negative
  thousandsSeparator: " ", // any single char
  padFractionalZeros: false, // if true, then pads zeros at end to the length of scale
  normalizeZeros: true, // appends or removes zeros at ends
  radix: ".", // fractional delimiter
  mapToRadix: [","], // symbols to process as radix
});

var numberMask = IMask(selectBox2, {
  mask: Number, // enable number mask
  // other options are optional with defaults below
  scale: 6, // digits after point, 0 for integers
  signed: false, // disallow negative
  thousandsSeparator: " ", // any single char
  padFractionalZeros: false, // if true, then pads zeros at end to the length of scale
  normalizeZeros: true, // appends or removes zeros at ends
  radix: ".", // fractional delimiter
  mapToRadix: [","], // symbols to process as radix
});

function commify(n) {
  var parts = n.toString().split(".");
  const numberPart = parts[0];
  const decimalPart = parts[1];
  const thousands = /\B(?=(\d{3})+(?!\d))/g;
  return (
    numberPart.replace(thousands, " ") + (decimalPart ? "." + decimalPart : "")
  );
}
