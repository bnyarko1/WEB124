// Benjamin Nyarko 11/11/2024
const secondHand = document.querySelector('.second-hand'); 
const minsHand = document.querySelector('.min-hand');
 const hourHand = document.querySelector('.hour-hand'); 
 const dateElement = document.querySelector('.date'); 
 const dayElement = document.querySelector('.day'); 
 function setDate() { const now = new Date(); 
  
  const seconds = now.getSeconds(); 
  const secondsDegrees = ((seconds / 60) * 360) + 90; 
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; 
  
  const mins = now.getMinutes(); 
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90; 
  minsHand.style.transform = `rotate(${minsDegrees}deg)`; 
  
  const hour = now.getHours(); 
  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90; 
  hourHand.style.transform = `rotate(${hourDegrees}deg)`; 
  
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const day = dayNames[now.getDay()];
   const date = now.getDate(); 
   const month = monthNames[now.getMonth()]; 
   const year = now.getFullYear(); 
   
   dateElement.textContent = `${month} ${date}, ${year}`; 
   dayElement.textContent = day; 
  
  }
  
  setInterval(setDate, 1000); 
  
  setDate();