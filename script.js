const image = document.getElementById("image");

function addHoverEffect() {
    image.classList.add("hovered");
}

function removeHoverEffect() {
    image.classList.remove("hovered");
}

image.addEventListener("mouseover", addHoverEffect);
image.addEventListener("mouseout", removeHoverEffect);