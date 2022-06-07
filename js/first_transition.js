
let $first = document.querySelector('#first');

let $name = document.querySelector('#name');
let $firstdiamonds = document.querySelectorAll('#diamonds_name')

let $spe = document.querySelector('#spe');
let $diamonds_spe = document.querySelector('#diamonds_spe');

let $btnA = document.querySelector('.f_btn');
let $btnB = document.querySelector('.s_btn');

function showFirstPart(){
    $first.classList.add('wholePadding');
}

function showName(){
    $name.classList.add('showName');
    for (let i = 0; i < $firstdiamonds.length ; i++){
        $firstdiamonds[i].classList.add('diamonds_name_show')
    }
}

function showSpe(){
    $spe.classList.add('showSpe');
    $diamonds_spe.classList.add('diamonds_spe_show');
}

function showRencontre(){
    $btnA.classList.add('showBtnsA');
    $btnB.classList.add('showBtnsB');
}

setTimeout(showFirstPart, .900);
setTimeout(showName, .900);
setTimeout(showSpe, 1000);
setTimeout(showRencontre, 1100);



