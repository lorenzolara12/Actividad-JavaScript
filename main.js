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
    mistcaja.innerHTML += `
    <video id="video" width="700" height="350">  
        <source src="./img/video.mp4">
    </video> `
    video.play();
}
