var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var random = document.querySelector("#random");



function setBackground() {
    body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`
    css.textContent = body.style.background;
}

function randomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


random.addEventListener("click", function() {
    color1.value = randomColor();
    color2.value = randomColor();
    setBackground();
})

setBackground()

color1.addEventListener("input", setBackground);

color2.addEventListener("input", setBackground);
