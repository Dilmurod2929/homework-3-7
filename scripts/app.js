let imageElement = document.querySelector(".slide");
console.log(imageElement.getAttribute("src"));

setInterval(() => {
  let src = imageElement.getAttribute("src");
  if (src === "images/ochiq.png") {
    imageElement.setAttribute("src", "images/yoniq.png");
    document.body.style.backgroundColor = "white";
  } else {
    imageElement.setAttribute("src", "images/ochiq.png");
    document.body.style.backgroundColor = "black";
  }
}, 2000);

console.log(imageElement);
