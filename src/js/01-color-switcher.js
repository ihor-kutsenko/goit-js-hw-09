const bodyEl = document.querySelector("body");
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');

let timerId = null;

start.addEventListener('click', () => {
  timerId = setInterval(changeBodyColor, 1000);
  start.disabled = true;
  stop.disabled = false;
}
);

stop.addEventListener('click', () => {
  clearInterval(timerId);
  start.disabled = false;
  stop.disabled = true;
}
)

function changeBodyColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
 };



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};