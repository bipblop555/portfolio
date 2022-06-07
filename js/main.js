let tgl = document.querySelectorAll('#renc_btn');
let header_links = document.querySelectorAll('#header_links');
let activeBtn = false;

for (let i = 0; i < header_links.length; i++){
    header_links[i].addEventListener('mouseover', function(e){
        header_links[i].classList.toggle('activelinks')
    })
    header_links[i].addEventListener('mouseout', function(e){
        header_links[i].classList.toggle('activelinks')
    })
}

// BUTTONS BLACK TO WHITE
for (let i = 0; i < tgl.length; i++){
    tgl[i].addEventListener('mouseover',function(e){
        tgl[1].classList.toggle('blck_btn');
        tgl[0].classList.toggle('whte_btn');
    })
    tgl[i].addEventListener('mouseout', function(e){
        tgl[0].classList.toggle('blck_btn');
        tgl[1].classList.remove('whte_btn');
    })
}

