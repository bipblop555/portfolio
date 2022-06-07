let $diamonds_band = document.querySelectorAll('#band_svgs');


function rotatingBand(){
    for (let i = 0; i < $diamonds_band.length ; i++){
        $diamonds_band[i].classList.toggle('rotating_diamonds_45');
    }
}
setInterval(rotatingBand, 1000);