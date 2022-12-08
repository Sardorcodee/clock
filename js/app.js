let sek = document.getElementById("se");
let min = document.getElementById("mi");
// let audio = document.querySelector("#audio");
let soat = document.getElementById("so");
setInterval(function(){
   audio.setAttribute("src", "Clock-Ticking-Sound.mp3");
},2000)
setInterval(function(){
 let date = new Date(),
 cek = date.getSeconds() / 60,
 minn = (date.getMinutes() + cek) / 60,
 hour = (date.getHours() + minn) / 12;
 sek.style.transform = "rotate(" + (cek * 360) + "deg)";
 min.style.transform = "rotate(" +(minn * 360 )+ "deg)";
 soat.style.transform = "rotate(" +(hour * 360)+ "deg)";
},1000);
