const input = document.getElementById("username");
const button = document.getElementById("likeButton");
const greeting = document.getElementById("greeting");
const counter = document.getElementById("counter");

let count = 0;

input.addEventListener("input", function () {
  console.log("Texto digitado:", input.value);
});

input.addEventListener("keydown", function (event) {
  console.log("Tecla pressionada:", event.key);
});

button.addEventListener("click", function () {
  const name = input.value.trim();
  if (name !== "") {
    greeting.innerText = `Olá, ${name}!`;
  } else {
    greeting.innerText = "Olá!";
  }

  count++;
  counter.innerText = `Curtidas: ${count}`;
});

button.addEventListener("mouseover", function () {
  button.style.transform = "scale(1.05)";
});

button.addEventListener("mouseout", function () {
  button.style.transform = "scale(1)";
});
