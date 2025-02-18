// Описаний в документації
import flatpickr from "flatpickr";
// Додатковий імпорт стилів
import "flatpickr/dist/flatpickr.min.css";

const dateChoose = document.querySelector('input[type="text"]');
const button = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]')
const hours = document.querySelector('span[data-hours]')
const minutes = document.querySelector('span[data-minutes]')
const seconds = document.querySelector('span[data-seconds]')

const changeData = {days, hours, minutes, seconds};
console.log(changeData.days.textContent);


flatpickr(dateChoose, {enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
    },});
// flatpickr(dateChoose).latestSelectedDateObj.getTime()
button.addEventListener('click', () => {setInterval(() => {dateSetter(flatpickr(dateChoose).latestSelectedDateObj.getTime())}, 1000)})

function dateSetter (date) {
    const datenow = Date.now()
let currentValue = date - datenow;

console.log(convertMs(currentValue));
}
dateSetter(1739397600000)

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
  
    changeData.days.textContent = days
    changeData.hours.textContent = hours
    changeData.minutes.textContent = minutes
    changeData.seconds.textContent = seconds
  }
  