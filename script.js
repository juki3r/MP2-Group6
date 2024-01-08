
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
        if(e.feeds[0].field1 > 0){
            document.getElementById('service').innerHTML = 'Main Power';
            document.getElementById('service').style.backgroundColor = 'lime';
            document.getElementById('service').style.color = 'black';
            document.getElementById('backup').innerHTML = 'StandBy';
        }else{
            document.getElementById('service').innerHTML = 'Back-up Power';
            document.getElementById('backup').innerHTML = 'In-Service';
            document.getElementById('service').style.backgroundColor = 'red';
            document.getElementById('service').style.color = 'white';
        }
    });
       
}, 10);
//KWH
let x = 10.012345;
setInterval(() => {
    document.getElementById('kwh').innerHTML = x.toPrecision(4);
    x+=0.05;
    
}, 1000);





//Getting all Logs to be displayed
let textarea = document.getElementById('logs');
textarea.value = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() + ' ->System up and running. \n';

// Doors
 
 function maingate() {
    let mainGate = document.getElementById('mainGateLabel');
    if(mainGate.innerHTML == "LOCK"){
        mainGate.innerHTML = "UNLOCK";
        document.getElementById('maingateLockicon').style.display = 'none';
        document.getElementById('maingateUnlockicon').style.display = 'inline-block';
        document.querySelector('.maingatebtn').style.backgroundColor = 'red';
        document.querySelector('.maingatebtn').style.color = 'white';
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Main Gate unlocked \n'
    }else{
        mainGate.innerHTML = "LOCK"
        document.getElementById('maingateLockicon').style.display = 'inline-block';
        document.getElementById('maingateUnlockicon').style.display = 'none';
        document.querySelector('.maingatebtn').style.backgroundColor = 'lime';
        document.querySelector('.maingatebtn').style.color = 'black';
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Main Gate locked \n'
    }
 }
 // Front Door

 function frontdoor() {
    let frontDoor = document.getElementById('frontDoorlabel');
    if(frontDoor.innerHTML == "LOCK"){
        frontDoor.innerHTML = "UNLOCK";
        document.getElementById('frontDoorLockicon').style.display = 'none';
        document.getElementById('frontDoorUnlockicon').style.display = 'inline-block';
        document.querySelector('.frontdoorbtn').style.backgroundColor = 'red';
        document.querySelector('.frontdoorbtn').style.color = 'white';
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Front Door unlocked \n'
    }else{
        frontDoor.innerHTML = "LOCK"
        document.getElementById('frontDoorLockicon').style.display = 'inline-block';
        document.getElementById('frontDoorUnlockicon').style.display = 'none';
        document.querySelector('.frontdoorbtn').style.backgroundColor = 'lime';
        document.querySelector('.frontdoorbtn').style.color = 'black';
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Front Door locked \n'
    }
 }
 // Front Door
 function backdoor() {
    let backDoor = document.getElementById('backDoorlabel');
    if(backDoor.innerHTML == "LOCK"){
        backDoor.innerHTML = "UNLOCK";
        document.getElementById('backDoorLockicon').style.display = 'none';
        document.getElementById('backDoorUnlockicon').style.display = 'inline-block';
        document.querySelector('.backdoorbtn').style.backgroundColor = 'red';
        document.querySelector('.backdoorbtn').style.color = 'white';
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Back Door unlocked \n'
    }else{
        backDoor.innerHTML = "LOCK"
        document.getElementById('backDoorLockicon').style.display = 'inline-block';
        document.getElementById('backDoorUnlockicon').style.display = 'none';
        document.querySelector('.backdoorbtn').style.backgroundColor = 'lime';
        document.querySelector('.backdoorbtn').style.color = 'black';
        textarea.value += new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString() +  '-> Back Door locked \n'
    }
 }
















