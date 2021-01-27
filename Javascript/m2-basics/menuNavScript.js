
//id menu-area mudar de largura quando clicada
//fechada width 0
//aberta width 200px

function toggleMenu(){

    let menuArea = document.getElementById("menu-area");

    if (menuArea.classList.contains('menu-opened') == true) {
        menuArea.classList.remove('menu-opened');

    } else {
        menuArea.classList.add('menu-opened');
    }

}

/*

let menuArea = document.getElementById("menu-area");

    if (menuArea.style.width == '200px') {
        menuArea.style.width = '0px';

    } else {
        menuArea.style.width = '200px'
    }


*/ 