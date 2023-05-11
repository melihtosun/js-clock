// Karşılama
let userName = prompt("Merhaba! Lütfen ismini girer misin?")
let myName = document.querySelector('#myName')
myName.innerHTML = `${userName}`



// Saat
function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  
  var options = { weekday: 'long', timeZone: 'Europe/Istanbul' };
  var dayName = date.toLocaleDateString('tr-TR', options);
  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s + " " + dayName;
  document.getElementById("myClock").innerText = time;
  document.getElementById("myClock").textContent = time;
  
  setTimeout(showTime, 1000);
}
showTime();




