let imageElement = document.querySelector(".slide");
console.log(imageElement.getAttribute("src"));

setInterval(() => {
  let src = imageElement.getAttribute("src");
  if (src === "images/ochiq.png") {
    imageElement.setAttribute("src", "images/yoniq.png");
  } else {
    imageElement.setAttribute("src", "images/ochiq.png");
  }
}, 2000);

console.log(imageElement);
