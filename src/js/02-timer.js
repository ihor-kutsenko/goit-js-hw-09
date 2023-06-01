import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
const day = document.querySelector("[data-days]");
const hour = document.querySelector("[data-hours]");
const minute = document.querySelector("[data-minutes]");
const second = document.querySelector("[data-seconds]");




const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
  },
};

flatpickr(input, options);

const startTime = Date.now();
startBtn.disabled = true;


input.addEventListener('input', changeDate)


startBtn.addEventListener('click', timerPlay);

function changeDate() {
  const selectedDay = input._flatpickr.selectedDates[0];
  if (selectedDay > startTime) {
    startBtn.disabled = false;
    
    return
  } else {
    startBtn.disabled = true;
    Notiflix.Notify.failure("Please choose a date in the future");
  }
};

function timerPlay() {
  
  input.disabled = true;
  timerId = setInterval(() => {
      const selectedDay = input._flatpickr.selectedDates[0];
    const currentDay = Date.now();
    const differentTime = selectedDay - currentDay;
    

    const { days, hours, minutes, seconds } = convertMs(differentTime);

    day.textContent = addLeadingZero(days);
    hour.textContent = addLeadingZero(hours);
    minute.textContent = addLeadingZero(minutes);
    second.textContent = addLeadingZero(seconds);

    if (differentTime < 0) {
      clearInterval(timerId);
      day.textContent = "00";
      hour.textContent = "00";
      minute.textContent = "00";
      second.textContent = "00";
    }
      

  }, 1000)
};

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

