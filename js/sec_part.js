let $second = document.querySelector('.second');
let $second_main = document.querySelector('.main');
let $second_second = document.querySelector('.sec_part_sec');
let $second_diamonds = document.querySelector('.diamonds_sec');

let primo = document.querySelectorAll('#linkedin');
let secondo = document.querySelectorAll('#github');
let tersio = document.querySelectorAll('#mail');
let svgs = document.querySelectorAll('.svg_links');

// ICI ON SWITCH LA COULEUR DES ELEMENTS //
// ICI LE PREMIER //

svgs[0].addEventListener('mouseover', function(e){

            svgs[0].classList.toggle('toRed');
            primo[0].classList.toggle('toBlack');
        
    })
svgs[0].addEventListener('mouseout', function(e){

            svgs[0].classList.toggle('toRed');
            primo[0].classList.toggle('toBlack');
        
    })

// ON SWITCH LE SECOND //

svgs[1].addEventListener('mouseover', function(e){


            svgs[1].classList.toggle('toRed');
            secondo[0].classList.toggle('toBlack');
        
    })
svgs[1].addEventListener('mouseout', function(e){

            svgs[1].classList.toggle('toRed');
            secondo[0].classList.toggle('toBlack');
        
    })
// ON SWITCH LE DERNIER 
svgs[2].addEventListener('mouseover', function(e){


        svgs[2].classList.toggle('toRed');
        tersio[0].classList.toggle('toBlack');
    
})
svgs[2].addEventListener('mouseout', function(e){

        svgs[2].classList.toggle('toRed');
        tersio[0].classList.toggle('toBlack');
    
})

// ICI C SCROLL
window.addEventListener('scroll', function(e){
    if (window.scrollY > 290 ){
        
        $second.classList.add('movingSecond');
        $second_diamonds.classList.add('diamonds_sec_disapear');

        for (let i = 0; i < 2; i++){
            primo[i].classList.add('movingliens_pro');
            secondo[i].classList.add('movingliens_pro');
            tersio[i].classList.add('movingliens_pro');
        }

        for (let i = 0; i < svgs.length; i++){
            svgs[i].classList.add('svg_links_disapear')
        }
    }
    else if (this.window.scrollY < 290){
        $second.classList.remove('movingSecond');
        $second_diamonds.classList.remove('diamonds_sec_disapear');

        for (let i = 0; i < 2; i++){
            primo[i].classList.remove('movingliens_pro');
            secondo[i].classList.remove('movingliens_pro');
            tersio[i].classList.remove('movingliens_pro');
        }

        for (let i = 0; i < svgs.length; i++){
            svgs[i].classList.remove('svg_links_disapear')
        }
    }
})

let $diamonds_proj = document.querySelector('#diamonds_proj');
function rotateDiamonds(){
    $diamonds_proj.classList.toggle('rotating_diamonds_45');
}
setInterval(rotateDiamonds, 1000);