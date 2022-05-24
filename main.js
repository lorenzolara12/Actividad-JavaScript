// ejercicio clima
function clima (){
    let temp = document.getElementById("temperatura").value;
    if (temp >= 0 && temp <= 16) {
        alert("Esta fresco para pasear en Jaula!");
        return false;
    } else if (temp > 16) {
        alert("Madicion, va a ser un dia hermoso!");
    }else{
        alert("Ni idea capo, pero suerte!")
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