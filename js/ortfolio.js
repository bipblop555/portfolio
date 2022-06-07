const diamond_port = document.querySelector('.diamonds_proj');

const $portfolioTitle = document.querySelector('#portfolioTitle');
const $portfolioPres = document.querySelector('#portfolioPres');

let $descr_proj = document.querySelector('#descr_proj');
let $descr_proj_b = document.querySelector('#descr_proj_b');

let $curtains = document.querySelectorAll('#curtains');
let $projboxes = document.querySelectorAll('#projs');

window.addEventListener('scroll', function(e){
    if (window.scrollY > 690 ){
        diamond_port.classList.add('diamonds_proj_disapear');
    }
    else if (this.window.scrollY < 690){
        diamond_port.classList.remove('diamonds_proj_disapear');
    }
})

window.addEventListener('scroll', function(e){

    if (window.scrollY > 700){
        $portfolioTitle.classList.add('portfolio_disapear');
        $portfolioPres.classList.add('div_proj_disapear');
    }
    else if (window.scrollY < 700){
        $portfolioTitle.classList.remove('portfolio_disapear');
        $portfolioPres.classList.remove('div_proj_disapear');
    }})

    for (let i = 0; i < $projboxes.length; i++){
        window.addEventListener('scroll', function(e){
            if (this.window.scrollY > 1800){
                $curtains[0].classList.add('curtain_drop');
                $curtains[1].classList.add('curtain_drop_late');
            }
            else if (this.window.scrollY < 1800){
                $curtains[0].classList.remove('curtain_drop');
                $curtains[1].classList.remove('curtain_drop_late');
            }
        })
    }
