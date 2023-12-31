
// Text to Speech
var msg = new SpeechSynthesisUtterance();

// Date and Time
document.querySelector('.petsa').innerHTML = new Date().toDateString();
setInterval(() => {
    document.querySelector('.oras').innerHTML = new Date().toLocaleTimeString();
}, 1000);




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
    fetch('https://api.thingspeak.com/channels/2384968/fields/1.json?results=2').then(res => res.json()).then(data =>
       data.feeds[1].field1 == 0 ? backyardbulb_status.src = "images/pic_bulboff.gif": backyardbulb_status.src = "images/pic_bulbon.gif");

    
    fetch('https://api.thingspeak.com/channels/2385141/fields/1.json?results=2').then(res => res.json()).then(function(e){
        if(e.feeds[0].field1 >= 180){
            document.getElementById('service').innerHTML = 'Main Power';
            document.getElementById('service').style.background = 'lime';
            document.getElementById('service').style.color = 'black';
            document.getElementById('backup').innerHTML = 'Stand-By';
            document.getElementById('backup').style.background = 'orangered';
            document.getElementById('backup').style.color = 'black';
        }else{
            document.getElementById('service').innerHTML = 'Back-up Power';
            document.getElementById('service').style.background = 'red';
            document.getElementById('service').style.color = 'white';
            document.getElementById('backup').innerHTML = 'In-Service';
            document.getElementById('backup').style.background = 'lime';
            document.getElementById('backup').style.color = 'black';
        }
        document.getElementById('voltage').innerHTML = e.feeds[0].field1 + ' Volts';
    });

  fetch('https://api.thingspeak.com/channels/2396754/fields/1.json?api_key=ZE7MXIFRRUAOEVK2&results=2').then(res => res.json()).then(function(e){
        if(e.feeds[0].field1 >= 80){
            document.getElementById('sprinkler').innerHTML = 'Ready';
            document.getElementById('sprinkler').style.background ='lime';
            document.getElementById('sprinkler').style.color = 'black';
        }else{
            document.getElementById('sprinkler').innerHTML = 'Stand-By';
            document.getElementById('sprinkler').style.background ='none';
            document.getElementById('sprinkler').style.color = 'white';
        }
        document.getElementById('gas').innerHTML = e.feeds[0].field1 + ' PPM';
    });
       
}, 10000);


//Getting all Logs to be displayed
let textarea = document.getElementById('logs');
textarea.value = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() + ' ->System up and running. \n';

// Doors
 
var maingatebtn = document.getElementById('maingatebtn');
maingatebtn.addEventListener("change", function(){
    maingatebtn.checked ? textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Main gate is locked \n' : 
                                textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Main gate is unlocked \n'
})
var frontdoorbtn = document.getElementById('frontdoorbtn');
frontdoorbtn.addEventListener("change", function(){
    frontdoorbtn.checked ? textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Front Door is locked \n' : 
                                textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Front Door is unlocked \n'
})
var backdoorbtn = document.getElementById('backdoorbtn');
backdoorbtn.addEventListener("change", function(){
    backdoorbtn.checked ? textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Back Door is locked \n' : 
                                textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Back Door is unlocked \n'
})








// setTimeout(() => {
//     window.location.assign('/')
// }, 600000);













