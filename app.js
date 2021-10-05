const clockHour = document.getElementsByClassName('hour')[0]
const clockMinute = document.getElementsByClassName('minute')[0]
const clockSecond = document.getElementsByClassName('second')[0]
const clockDay = document.getElementsByClassName('day')[0]

function setTime() {
//get current time
const date = new Date()
const timeHour = date.getHours()
const timeMinute = date.getMinutes()
const timeSecond = date.getSeconds()
const day = timeHour + " : " + timeMinute

//get position of tick
let degSeconds = 'rotate(' + ((timeSecond * 360 / 60) + 180) + 'deg)'
let degMinutes = 'rotate(' + ((timeMinute * 360 / 60) + 180) + 'deg)'
let degHours = 'rotate(' + ((timeHour * 360 / 12) + 180) + 'deg)';

//set tick position
clockHour.style.transform = degHours
clockMinute.style.transform = degMinutes
clockSecond.style.transform = degSeconds
clockDay.innerHTML = day
}
setInterval(setTime, 1000)
 
