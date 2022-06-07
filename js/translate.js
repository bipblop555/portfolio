let $head_btn = document.querySelector('#head_btn');

en = false;
fr = true;
function FrAn(){
    if (en == true){
        tgl[0].innerHTML = "French";
        return en;
    } 
}

function translate (){
    // HEADER // 
    $header_links[0].innerHTML = "Home";
    $header_links[1].innerHTML = "About Me";
    $header_links[2].innerHTML = "Projects";

    $head_btn.innerHTML = "Let's Meet";
    $head_btn.classList.add('largerPadding');

    // PART 1 //
    $name.innerHTML = 
    '<p class ="showNameTr" id ="name">' +
    'Tom Bonnet<br>Student' + 
    '<svg class ="diamonds_name_tr" id ="diamonds_name" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 227.7C515.9 243.3 515.9 268.7 500.3 284.3L284.3 500.3C268.7 515.9 243.3 515.9 227.7 500.3L11.72 284.3C-3.905 268.7-3.905 243.3 11.72 227.7L227.7 11.72C243.3-3.905 268.7-3.905 284.3 11.72L500.3 227.7z"/></svg>' +
    'Web Developer<br>HETIC Montreuil ' + 
    '<svg class ="diamonds_name_tr" id ="diamonds_name" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 227.7C515.9 243.3 515.9 268.7 500.3 284.3L284.3 500.3C268.7 515.9 243.3 515.9 227.7 500.3L11.72 284.3C-3.905 268.7-3.905 243.3 11.72 227.7L227.7 11.72C243.3-3.905 268.7-3.905 284.3 11.72L500.3 227.7z"/></svg>' +
    'Paris' +
    '</p';

    // PART 2 //
    $second_main.innerText = "New to the tech industry";
    $second_second.innerText =
     "Since I dropped school I worked in restaurant in Corsica, I've also did some factory work " +
     "I finally got the chance to go back to school and the Tech Industry was " + 
     "obvious to me.";

    $portfolioTitle.innerText = "My portfolio";
    $portfolioPres.innerText = "A non exhaustive presentation of my projetcs"

    // PART PROJECTS //
    $descr_proj.innerText = "After we saw the DOM in JS I tried to make " +
    "a rock paper cisor game";
    $descr_proj_b.innerText = "Cine-Wave is a group project" + 
    "the aim here is to reproduce a famous streaming site";
    
}

tgl[1].addEventListener('click', function(e){
    translate();

    en = true;
    FrAn();
})
