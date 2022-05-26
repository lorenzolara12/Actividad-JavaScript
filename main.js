// ejercicio clima
var modeTemp;

function clima (){
    let modeTemp = document.getElementById("flexSwitchCheckReverse").checked;
    let temp = document.getElementById("temperatura").value;
    if(modeTemp == false){
        if (temp >= 0 && temp <= 16 && temp != '') {
            alert("Esta fresco para pasear en Jaula!");
            return false;
        } else if (temp > 16) {
            alert("Madicion, va a ser un dia hermoso!");
        }else{
            alert("No pusiste nada capo, pero suerte!")
        }
    }else{
        if (temp >= 32 && temp <= 60.8) {
            alert("Esta fresco para pasear en Jaula!");
            return false;
        } else if (temp > 60.8) {
            alert("Madicion, va a ser un dia hermoso!");
        }else{
            alert("Ni idea capo, pero suerte!")
        }
    }
        
}

function caja(){
    let mistcaja = document.getElementById("resultadocaja");
    mistcaja.innerHTML = `
    <video id="video" class="img-fluid">  
        <source src="./img/video.mp4">
    </video> `
    video.play();
}

function cajaStop(){
    video.pause();
}

function cajaunleashed(){
    video.pause();
    let mistcaja = document.getElementById("resultadocaja");
    mistcaja.innerHTML = `
    <video id="video" width="1050px" height="600px">  
        <source src="./img/video.mp4">
    </video> `
    video.play();
}

function toFaren(){
    let temp = document.getElementById("temperatura").value;
    let modeTemp = document.getElementById("flexSwitchCheckReverse").checked;

    if(modeTemp == true && temp != ''){
        let temp = document.getElementById("temperatura").value;
        let tempFaren = (temp * 9/5) + 32;
        document.getElementById("temperatura").value = tempFaren;
    }else if(modeTemp == false && temp != ''){
        let temp = document.getElementById("temperatura").value;
        let tempCel = (temp - 32) * 5/9;
        document.getElementById("temperatura").value = tempCel;
    }
}