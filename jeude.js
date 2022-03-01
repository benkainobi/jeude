function hasard() {
    let n = Math.round(Math.random() * 5 + 1);
    if (n == 1) {
        de.className = 'de ein';
        current1.innerHTML = 0;
        current2.innerHTML = 0;
        signal1.classList.toggle('actif');
        signal2.classList.toggle('actif');
        current1.classList.toggle('actif2');
        current2.classList.toggle('actif2');
        total1.classList.toggle('actif2');
        total2.classList.toggle('actif2');
        /*changement effectif de current et total*/
        currentActif = document.querySelector('.current.actif2');
        totalActif = document.querySelector('.total.actif2');
    }

    if (n == 2) {
        de.className = 'de zwei';
        currentActif.innerHTML = parseInt(currentActif.innerHTML) + 2;
    }
    if (n == 3) {
        de.className = 'de drei';
        currentActif.innerHTML = parseInt(currentActif.innerHTML) + 3;
    }
    if (n == 4) {
        de.className = 'de vier';
        currentActif.innerHTML = parseInt(currentActif.innerHTML) + 4;
    }
    if (n == 5) {
        de.className = 'de funf';
        currentActif.innerHTML = parseInt(currentActif.innerHTML) + 5;
    }
    if (n == 6) {
        de.className = 'de sechs';
        currentActif.innerHTML = parseInt(currentActif.innerHTML) + 6;
    }
}

function tenir() {
    /*addition du current actif avec le total déja tenu actif*/
    totalActif.innerHTML = parseInt(totalActif.innerHTML) + parseInt(currentActif.innerHTML);


    if (total1.innerHTML >= 100) {
        alert('Joueur 1 gagne!');
        rejouer();
    }
    if (total2.innerHTML >= 100) {
        alert('Joueur 2 gagne!');
        rejouer();
    }

    /* total1.classList.toggle('actif2');
     total2.classList.toggle('actif2');*/
    /*Remise à zéro du compteur de la série active*/
    currentActif.innerHTML = 0;

    /*échange de l'activité des compteurs et indicateur*/
    signal1.classList.toggle('actif');
    signal2.classList.toggle('actif');

    current1.classList.toggle('actif2');
    current2.classList.toggle('actif2');



    total1.classList.toggle('actif2');
    total2.classList.toggle('actif2');

    /*changement effectif de current et total*/
    currentActif = document.querySelector('.current.actif2');
    totalActif = document.querySelector('.total.actif2');
}

function rejouer() {
    total1.innerHTML = 0;
    total2.innerHTML = 0;
    current1.innerHTML = 0;
    current2.innerHTML = 0;
    signal1.classList.add('actif');
    signal2.classList.remove('actif');
}


/*bouton d'action*/
let toucheRejouer = document.querySelector('.rejouer');
toucheRejouer.addEventListener('click', rejouer);


let toucheLancer = document.querySelector('.lancer');
toucheLancer.addEventListener('click', hasard);


let boutonTenir = document.querySelector('.tenir');
boutonTenir.addEventListener('click', tenir);


/*Déclaration et initialisation de l'indicateur de joueur actif*/
let signal1 = document.querySelector('.signal1');
let signal2 = document.querySelector('.signal2');
signal1.classList.add('actif');
/* actif est une classe qui définit le point rouge du joueur actif*/


/*Déclaration et initialisation des compteurs*/
/* compteur du nombre de point d'une série de jet de dé*/
/*let current = document.querySelectorAll('.current');*/

let current1 = document.querySelector('.un');
let current2 = document.querySelector('.deux');

current1.innerHTML = 0;
current2.innerHTML = 0;

current1.classList.toggle('actif2');
let currentActif = document.querySelector('.current.actif2');


/*compteur de la somme des séries tenues*/

/*let total = document.querySelectorAll('.total');*/

let total1 = document.querySelector('.one');
let total2 = document.querySelector('.two');

total1.innerHTML = 0;
total2.innerHTML = 0;

total1.classList.toggle('actif2');


let totalActif = document.querySelector('.total.actif2');

/* Déclaration du dé*/
let de = document.querySelector('.de');