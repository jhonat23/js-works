const secondHand = document.querySelector('.second-hand'); 
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){    
    const now = new Date();

    const seconds = now.getSeconds();
    const seconds_degree = ((seconds + 15) / 60) * 360;

    secondHand.style.transform = `rotate(${seconds_degree}deg)`;

    const mins = now.getMinutes();
    mins_degree = ((mins + 15) / 60) * 360;
    minuteHand.style.transform = `rotate(${mins_degree}deg)`;

    const hour =  now.getHours();
    hour_degree = ((hour / 12) * 360) + 90;
    
    hourHand.style.transform = `rotate(${hour_degree}deg)`;

    dig_hour = hour + ':' + mins + ':' + seconds;
    document.getElementById('hours').innerText = dig_hour
}
setInterval(setDate, 1000);

