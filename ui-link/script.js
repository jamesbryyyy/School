function clock(){
  let hour = document.getElementById('hour');
  let minutes = document.getElementById('minutes');
  let second = document.getElementById('second');
  let ampm = document.getElementById('ampm');

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  var am = 'AM'

  if(h>12){
    h= h-12;
    am = 'PM'
  }
  if (h<10) {
    h = '0'+h;
  }
  if (m<10) {
    m = '0'+ m;
  }
  if (s<10) {
    s = '0'+ s;
  }
 

  hour.innerHTML=h;
  minutes.innerHTML=m;
  second.innerHTML=s;
  ampm.innerHTML=am;
}

var interval = setInterval(clock,1000);
clock();

let print = document.querySelector('.finger-print');

print.addEventListener("click",myDisplay)

let osApp = document.getElementById('osApp');
function myDisplay(){
  let container = document.getElementById('container');
  let am = document.getElementById('am');
  let print = document.getElementById('print');
  container.style.display = 'none';
  am.style.display = 'none';
  print.style.display = 'none';

  osApp.style.display = 'block';
}

let map = document.getElementById('map');

map.addEventListener("click",showMap);

function showMap(){
 osApp.style.display='none';
 let mapDisplay = document.getElementById('mapDisplay');
 mapDisplay.style.display = 'block';
}