
// Text to Speech
var msg = new SpeechSynthesisUtterance();

// Date and Time
document.querySelector('.petsa').innerHTML = new Date().toDateString();
setInterval(() => {
    document.querySelector('.oras').innerHTML = new Date().toLocaleTimeString();
}, 1000);

// Hamburger button
function hamburgerbtn() {
    if(document.getElementById('mobile').style.display == "block"){
        document.getElementById('mobile').style.display = "none";
    }else{
        document.getElementById('mobile').style.display = "block";
    }   
}

// Nav Icons Click
var homepage = document.getElementById('homepage');
var weather = document.getElementById('weather');
var lights = document.getElementById('lights');
var calendar = document.getElementById('calendar');
var power = document.getElementById('power');
var settings = document.getElementById('settings');


homepage.addEventListener("click", function(){
    window.location.href = 'index.html';
});
homepage.addEventListener("mouseover", function() {
    homepage.style.background = 'rgb(12, 168, 121)';
    
});
homepage.addEventListener("mouseleave", function() {
    homepage.style.background = 'transparent'; 
});
weather.addEventListener("click", function(){
    window.location.href = 'index.html';
});
weather.addEventListener("mouseover", function() {
    weather.style.background = 'rgb(12, 168, 121)';
});
weather.addEventListener("mouseleave", function() {
    weather.style.background = 'transparent';
});
lights.addEventListener("click", function(){
    window.location.href = 'index.html';
});
lights.addEventListener("mouseover", function() {
    lights.style.background = 'rgb(12, 168, 121)';
});
lights.addEventListener("mouseleave", function() {
    lights.style.background = 'transparent';
});
calendar.addEventListener("click", function(){
    window.location.href = 'index.html';
});
calendar.addEventListener("mouseover", function() {
    calendar.style.background = 'rgb(12, 168, 121)';
});
calendar.addEventListener("mouseleave", function() {
    calendar.style.background = 'transparent';
});
power.addEventListener("click", function(){
    window.location.href = 'index.html';
});
power.addEventListener("mouseover", function() {
    power.style.background = 'rgb(12, 168, 121)';
});
power.addEventListener("mouseleave", function() {
    power.style.background = 'transparent';
});
settings.addEventListener("click", function(){
    window.location.href = 'index.html';
});
settings.addEventListener("mouseover", function() {
    settings.style.background = 'rgb(12, 168, 121)';
});
settings.addEventListener("mouseleave", function() {
    settings.style.background = 'transparent';
});


//Bedroom - 1
var room1bulb_status = document.getElementById('room1bulb');
function room1light() {   
    if (room1bulb_status.src.match("bulbon")) {
        room1bulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('room_1_light_switch', 0);
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Bedroom 1 light is turned off \n'
        msg.text = "Bedroom 1 light is off";
        window.speechSynthesis.speak(msg);
        } else {
            room1bulb_status.src = "images/pic_bulbon.gif";
            localStorage.setItem('room_1_light_switch', 0.1);
            textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Bedroom 1 light is turned on \n'
            msg.text = "Bedroom 1 light is on";
            window.speechSynthesis.speak(msg);
            }
}
if((localStorage.getItem('room_1_light_switch') == null) || (localStorage.getItem('room_1_light_switch') == 0)){
        room1bulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('room_1_light_switch', 0);
            }else{
                room1bulb_status.src = "images/pic_bulbon.gif";
                localStorage.setItem('room_1_light_switch', 0.1);
            }
 //Bedroom - 2
var room2bulb_status = document.getElementById('room2bulb');
function room2light() {   
    if (room2bulb_status.src.match("bulbon")) {
        room2bulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('room_2_light_switch', 0);
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Bedroom 2 light is turned off \n'
        msg.text = "Bedroom 2 light is off";
        window.speechSynthesis.speak(msg);
        } else {
            room2bulb_status.src = "images/pic_bulbon.gif";
            localStorage.setItem('room_2_light_switch', 0.1);
            textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Bedroom 2 light is turned on \n'
            msg.text = "Bedroom 2 light is on";
            window.speechSynthesis.speak(msg);
            }
}
if((localStorage.getItem('room_2_light_switch') == null) || (localStorage.getItem('room_2_light_switch') == 0)){
        room2bulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('room_2_light_switch', 0);
            }else{
                room2bulb_status.src = "images/pic_bulbon.gif";
                localStorage.setItem('room_2_light_switch', 0.1);
            }
 //Bedroom - 3
var room3bulb_status = document.getElementById('room3bulb');
function room3light() {   
    if (room3bulb_status.src.match("bulbon")) {
        room3bulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('room_3_light_switch', 0);
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Bedroom 3 light is turned off \n'
        msg.text = "Bedroom 3 light is off";
        window.speechSynthesis.speak(msg);
        } else {
            room3bulb_status.src = "images/pic_bulbon.gif";
            localStorage.setItem('room_3_light_switch', 0.1);
            textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Bedroom 3 light is turned on \n'
            msg.text = "Bedroom 3 light is on";
            window.speechSynthesis.speak(msg);
            }
}
if((localStorage.getItem('room_3_light_switch') == null) || (localStorage.getItem('room_3_light_switch') == 0)){
        room3bulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('room_3_light_switch', 0);
            }else{
                room3bulb_status.src = "images/pic_bulbon.gif";
                localStorage.setItem('room_3_light_switch', 0.1);
            }
 //Living room
 var livingroombulb_status = document.getElementById('livingroombulb');
 function livingroomlight() {   
     if(livingroombulb_status.src.match("bulbon")) {
         livingroombulb_status.src = "images/pic_bulboff.gif";
         localStorage.setItem('livingroom_light_switch', 0);
         textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Living room light is turned off \n'
         msg.text = "Living room light is off";
         window.speechSynthesis.speak(msg);
         } else {
             livingroombulb_status.src = "images/pic_bulbon.gif";
             localStorage.setItem('livingroom_light_switch', 0.1);
             textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Living room light is turned on \n'
             msg.text = "Living room light is on";
             window.speechSynthesis.speak(msg);
             }
 }
 if((localStorage.getItem('livingroom_light_switch') == null) || (localStorage.getItem('livingroom_light_switch') == 0)){
         livingroombulb_status.src = "images/pic_bulboff.gif";
         localStorage.setItem('livingroom_light_switch', 0);
             }else{
                 livingroombulb_status.src = "images/pic_bulbon.gif";
                 localStorage.setItem('livingroom_light_switch', 0.1);
             }
 //Kitchen room
 var kitchenroombulb_status = document.getElementById('kitchenroombulb');
 function kitchenroomlight() {   
     if(kitchenroombulb_status.src.match("bulbon")) {
         kitchenroombulb_status.src = "images/pic_bulboff.gif";
         localStorage.setItem('kitchenroom_light_switch', 0);
         textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Kitchen room light is turned off \n'
         msg.text = "Kitchen room light is off";
         window.speechSynthesis.speak(msg);
         } else {
             kitchenroombulb_status.src = "images/pic_bulbon.gif";
             localStorage.setItem('kitchenroom_light_switch', 0.1);
             textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Kitchen room light is turned on \n'
             msg.text = "Kitchen room light is on";
             window.speechSynthesis.speak(msg);
             }
 }
 if((localStorage.getItem('kitchenroom_light_switch') == null) || (localStorage.getItem('kitchenroom_light_switch') == 0)){
         kitchenroombulb_status.src = "images/pic_bulboff.gif";
         localStorage.setItem('kitchenroom_light_switch', 0);
             }else{
                 kitchenroombulb_status.src = "images/pic_bulbon.gif";
                 localStorage.setItem('kitchenroom_light_switch', 0.1);
             }
//Front Yard
var frontyardbulb_status = document.getElementById('frontyardbulb');
function frontyardlight(){   
    if(frontyardbulb_status.src.match("bulbon")) {
        frontyardbulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('frontyard_light_switch', 0);
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Front yard light is turned off \n'
        msg.text = "Front yard light is off";
        window.speechSynthesis.speak(msg);
        } else {
            frontyardbulb_status.src = "images/pic_bulbon.gif";
            localStorage.setItem('frontyard_light_switch', 0.1);
            textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Front yard light is turned on \n'
            msg.text = "Front yard light is on";
            window.speechSynthesis.speak(msg);
            }
}
if((localStorage.getItem('frontyard_light_switch') == null) || (localStorage.getItem('frontyard_light_switch') == 0)){
        frontyardbulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('frontyard_light_switch', 0);
            }else{
                frontyardbulb_status.src = "images/pic_bulbon.gif";
                localStorage.setItem('frontyard_light_switch', 0.1);
            }
//Back Yard
var backyardbulb_status = document.getElementById('backyardbulb');
function backyardlight(){   
    if(backyardbulb_status.src.match("bulbon")) {
        fetch('https://api.thingspeak.com/update?api_key=AXFVLCN4EHVQHHV9&field1=0');
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Back yard light will be turn off \n';
        msg.text = "Back yard light will be turn off";
        window.speechSynthesis.speak(msg);
        
        
        } else {
            fetch('https://api.thingspeak.com/update?api_key=AXFVLCN4EHVQHHV9&field1=1000');
            textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Back yard light will be turn on \n';
            msg.text = "Back yard light will be turn on";
            window.speechSynthesis.speak(msg);          
            }
}
setInterval(() => {
    var demo = fetch('https://api.thingspeak.com/channels/2384968/fields/1.json?results=2');
    demo.then(res => res.json()).then(data =>
       data.feeds[1].field1 == 0 ? backyardbulb_status.src = "images/pic_bulboff.gif": backyardbulb_status.src = "images/pic_bulbon.gif");

    var main_power = fetch('https://api.thingspeak.com/channels/2385141/fields/1.json?results=2');
    main_power.then(res => res.json()).then(function(e){
        if(e.feeds[0].field1 == 0){
            document.getElementById('service').innerHTML = 'Main Power';
            document.getElementById('backup').innerHTML = 'StandBy';
        }else{
            document.getElementById('service').innerHTML = 'Back-up Power';
            document.getElementById('backup').innerHTML = 'In-Service';
        }
    });
       
}, 10);







//Getting all Logs to be displayed
let textarea = document.getElementById('logs');
textarea.value = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() + ' ->System up and running. \n'



// function loadPage() {
//     const box = document.getElementById('main-wrapper');
  
//     fetch('lights.html')
//       .then(response => response.text())
//       .then(html => {
//         box.innerHTML = html;
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

















/*





// ---------------Lights -----------------------------------------------------------------------------------------------------------------------------------------
//Bedroom - 1
var room1bulb_status = document.getElementById('room1bulb');
function room1light() {   
    if (room1bulb_status.src.match("bulbon")) {
        room1bulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('room_1_light_switch', 0);
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Bedroom 1 light is turned off \n'
        msg.text = "Bedroom 1 light is off";
        window.speechSynthesis.speak(msg);
        } else {
            room1bulb_status.src = "images/pic_bulbon.gif";
            localStorage.setItem('room_1_light_switch', 0.1);
            textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Bedroom 1 light is turned on \n'
            msg.text = "Bedroom 1 light is on";
            window.speechSynthesis.speak(msg);
            }
}
if((localStorage.getItem('room_1_light_switch') == null) || (localStorage.getItem('room_1_light_switch') == 0)){
        room1bulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('room_1_light_switch', 0);
            }else{
                room1bulb_status.src = "images/pic_bulbon.gif";
                localStorage.setItem('room_1_light_switch', 0.1);
            }
 //Bedroom - 2
var room2bulb_status = document.getElementById('room2bulb');
function room2light() {   
    if (room2bulb_status.src.match("bulbon")) {
        room2bulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('room_2_light_switch', 0);
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Bedroom 2 light is turned off \n'
        msg.text = "Bedroom 2 light is off";
        window.speechSynthesis.speak(msg);
        } else {
            room2bulb_status.src = "images/pic_bulbon.gif";
            localStorage.setItem('room_2_light_switch', 0.1);
            textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Bedroom 2 light is turned on \n'
            msg.text = "Bedroom 2 light is on";
            window.speechSynthesis.speak(msg);
            }
}
if((localStorage.getItem('room_2_light_switch') == null) || (localStorage.getItem('room_2_light_switch') == 0)){
        room2bulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('room_2_light_switch', 0);
            }else{
                room2bulb_status.src = "images/pic_bulbon.gif";
                localStorage.setItem('room_2_light_switch', 0.1);
            }
 //Bedroom - 3
var room3bulb_status = document.getElementById('room3bulb');
function room3light() {   
    if (room3bulb_status.src.match("bulbon")) {
        room3bulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('room_3_light_switch', 0);
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Bedroom 3 light is turned off \n'
        msg.text = "Bedroom 3 light is off";
        window.speechSynthesis.speak(msg);
        } else {
            room3bulb_status.src = "images/pic_bulbon.gif";
            localStorage.setItem('room_3_light_switch', 0.1);
            textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Bedroom 3 light is turned on \n'
            msg.text = "Bedroom 3 light is on";
            window.speechSynthesis.speak(msg);
            }
}
if((localStorage.getItem('room_3_light_switch') == null) || (localStorage.getItem('room_3_light_switch') == 0)){
        room3bulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('room_3_light_switch', 0);
            }else{
                room3bulb_status.src = "images/pic_bulbon.gif";
                localStorage.setItem('room_3_light_switch', 0.1);
            }
 //Living room
 var livingroombulb_status = document.getElementById('livingroombulb');
 function livingroomlight() {   
     if(livingroombulb_status.src.match("bulbon")) {
         livingroombulb_status.src = "images/pic_bulboff.gif";
         localStorage.setItem('livingroom_light_switch', 0);
         textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Living room light is turned off \n'
         msg.text = "Living room light is off";
         window.speechSynthesis.speak(msg);
         } else {
             livingroombulb_status.src = "images/pic_bulbon.gif";
             localStorage.setItem('livingroom_light_switch', 0.1);
             textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Living room light is turned on \n'
             msg.text = "Living room light is on";
             window.speechSynthesis.speak(msg);
             }
 }
 if((localStorage.getItem('livingroom_light_switch') == null) || (localStorage.getItem('livingroom_light_switch') == 0)){
         livingroombulb_status.src = "images/pic_bulboff.gif";
         localStorage.setItem('livingroom_light_switch', 0);
             }else{
                 livingroombulb_status.src = "images/pic_bulbon.gif";
                 localStorage.setItem('livingroom_light_switch', 0.1);
             }
 //Kitchen room
 var kitchenroombulb_status = document.getElementById('kitchenroombulb');
 function kitchenroomlight() {   
     if(kitchenroombulb_status.src.match("bulbon")) {
         kitchenroombulb_status.src = "images/pic_bulboff.gif";
         localStorage.setItem('kitchenroom_light_switch', 0);
         textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Kitchen room light is turned off \n'
         msg.text = "Kitchen room light is off";
         window.speechSynthesis.speak(msg);
         } else {
             kitchenroombulb_status.src = "images/pic_bulbon.gif";
             localStorage.setItem('kitchenroom_light_switch', 0.1);
             textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Kitchen room light is turned on \n'
             msg.text = "Kitchen room light is on";
             window.speechSynthesis.speak(msg);
             }
 }
 if((localStorage.getItem('kitchenroom_light_switch') == null) || (localStorage.getItem('kitchenroom_light_switch') == 0)){
         kitchenroombulb_status.src = "images/pic_bulboff.gif";
         localStorage.setItem('kitchenroom_light_switch', 0);
             }else{
                 kitchenroombulb_status.src = "images/pic_bulbon.gif";
                 localStorage.setItem('kitchenroom_light_switch', 0.1);
             }
//Front Yard
var frontyardbulb_status = document.getElementById('frontyardbulb');
function frontyardlight(){   
    if(frontyardbulb_status.src.match("bulbon")) {
        frontyardbulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('frontyard_light_switch', 0);
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Front yard light is turned off \n'
        msg.text = "Front yard light is off";
        window.speechSynthesis.speak(msg);
        } else {
            frontyardbulb_status.src = "images/pic_bulbon.gif";
            localStorage.setItem('frontyard_light_switch', 0.1);
            textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Front yard light is turned on \n'
            msg.text = "Front yard light is on";
            window.speechSynthesis.speak(msg);
            }
}
if((localStorage.getItem('frontyard_light_switch') == null) || (localStorage.getItem('frontyard_light_switch') == 0)){
        frontyardbulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('frontyard_light_switch', 0);
            }else{
                frontyardbulb_status.src = "images/pic_bulbon.gif";
                localStorage.setItem('frontyard_light_switch', 0.1);
            }
//Back Yard
var backyardbulb_status = document.getElementById('backyardbulb');
function backyardlight(){   
    if(backyardbulb_status.src.match("bulbon")) {
        backyardbulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('backyard_light_switch', 0);
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Back yard light is turned off \n';
        msg.text = "Back yard light is off";
        window.speechSynthesis.speak(msg);
        
        } else {
            backyardbulb_status.src = "images/pic_bulbon.gif";
            localStorage.setItem('backyard_light_switch', 0.1);
            textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Back yard light is turned on \n';
            msg.text = "Back yard light is on";
            window.speechSynthesis.speak(msg);          
            }
}
if((localStorage.getItem('backyard_light_switch') == null) || (localStorage.getItem('backyard_light_switch') == 0)){
        backyardbulb_status.src = "images/pic_bulboff.gif";
        localStorage.setItem('backyard_light_switch', 0);
            }else{
                backyardbulb_status.src = "images/pic_bulbon.gif";
                localStorage.setItem('backyard_light_switch', 0.1);
            }





// ------------------ Graph Energy Monitor -------------------------------
let current_status;
let voltage_value;
let current_value;
let kwh_value;
var myChart = document.getElementById('myChart');
var EnergyChart = new Chart("myChart", {
  type: "line",
  data: {
    labels: ['VOLTAGE','CURRENT','KWH'],
    datasets: [{
      backgroundColor: ['green', 'red', 'blue'],
      data: [220, 200, 0]
    }]
  },
  options: {
    legend: {display: false},
    tooltips: {enabled: false},
    hover: {mode: null},
    title: {
      display: true,
      text: "Live Power Monitoring"
    }
  }
});
// Live Reactionof Power usage


setInterval(() => {
    // KWH
    let bulb1 = parseFloat(localStorage.getItem('room_1_light_switch'));
    let bulb2 = parseFloat(localStorage.getItem('room_2_light_switch'));
    let bulb3 = parseFloat(localStorage.getItem('room_3_light_switch'));
    let kitchenbulb = parseFloat(localStorage.getItem('kitchenroom_light_switch'));
    let livingroombulb = parseFloat(localStorage.getItem('livingroom_light_switch'));
    let frontyardbulb = parseFloat(localStorage.getItem('frontyard_light_switch'));
    let backyardbulb = parseFloat(localStorage.getItem('backyard_light_switch'));
    let totalkwh = bulb1  + bulb2 + bulb3 + kitchenbulb + livingroombulb + frontyardbulb + backyardbulb;
    localStorage.setItem('totalkwhstored', totalkwh);
    EnergyChart.data.datasets[0].data[2] += parseFloat(localStorage.getItem('totalkwhstored'));

    // AMPERE
    
    if(parseFloat(localStorage.getItem('totalkwhstored')) > 0){
        var current_status = 200;
        if(bulb1 > 0){
            current_status = current_status - 0.83
        }if(bulb2 > 0){
            current_status = current_status - 0.83
        }if(bulb3 > 0){
            current_status = current_status - 0.83
        }if(livingroombulb > 0){
            current_status = current_status - 0.83
        }if(kitchenbulb > 0){
            current_status = current_status - 0.83
        }if(frontyardbulb > 0){
            current_status = current_status - 0.83
        }if(backyardbulb > 0){
            current_status = current_status - 0.83
        }
    }else{
        current_status = 200;
    }  
    let currentResult = current_status.toFixed(2); // This is to fix numbers in 2 decimals.
    EnergyChart.data.datasets[0].data[1] = currentResult;
    EnergyChart.update();
    document.getElementById('voltage').innerHTML = EnergyChart.data.datasets[0].data[0];
    document.getElementById('ampere').innerHTML = currentResult;
    document.getElementById('kwh').innerHTML = Math.round(EnergyChart.data.datasets[0].data[2]);

}, 1000);



localStorage.clear()

*/
