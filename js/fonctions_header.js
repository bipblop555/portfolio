let $header_links = document.querySelectorAll('#header_links');

// ANIM SCROLL
$header_links[0].addEventListener('click', function(e){
    window.scroll(0,0);
})

$header_links[1].addEventListener('click', function(e){
    window.scroll(0,845);
})

$header_links[2].addEventListener('click', function(e){
    window.scroll(0,1539);
})
// FIN ANIM SCROLL // 

// BOUTTON LET'S MEET //
let $headbtn = document.querySelector('#head_btn');

function checker(){
    var result = confirm('Vous allez être redirigé vers votre client Mail');
    if (result == false){
        event.preventDefault();
    } else {
        window.open('mailto:tom.bonnet@hotmail.com?subject=&body=Monsieur BONNET Tom,');
    }
};
// FIN BOUTTON // 

// ANIM GLOW HEADER // 
function glowingHeader(){
    for (let i = 0; i < $header_links.length; i++){
        $header_links[i].classList.add('glowingLinks');
    }
}
function stopGlowingHeader(){
    for (let i = 0; i < $header_links.length; i++){
        $header_links[i].classList.remove('glowingLinks');
    }
}
// FIN ET DECLENCHEMENT TIMEOUT//
setTimeout(glowingHeader, 1000);
setTimeout(stopGlowingHeader, 2000);