function lancer() {
    let nombre = Math.round(Math.random() * 5 + 1);
    let resultat = document.querySelector('.de');
    let currentJoueur1 = document.querySelector('.un');
    let currentJoueur2 = document.querySelector('.deux');
    let signal1 = document.querySelector('.signal1');
    let signal2 = document.querySelector('.signal2');


    if (nombre == 1) {
        signal1.classList.toggle('lumiere');
        signal2.classList.toggle('lumiere');
        currentJoueur1.classList.toggle('actif');
        currentJoueur2.classList.toggle('actif');
        currentJoueur1.classList.toggle('inactif');
        currentJoueur2.classList.toggle('inactif');
        let actif = document.querySelector('.actif');
        let inactif = document.querySelector('.inactif');


        resultat.innerHTML = 1;


    } else {

        resultat.innerHTML = nombre;
        let c = document.querySelector('.actif');

        if (c.innerHTML == "") { c.innerHTML = 0; }
        c.innerHTML = parseInt(c.innerHTML) + parseInt(resultat.innerHTML);
    }



}

function tenir() {
    let currentJoueur1 = document.querySelector('.un');
    let currentJoueur2 = document.querySelector('.deux');

    signal1.classList.toggle('lumiere');
    signal2.classList.toggle('lumiere');

    let totalJoueur1 = document.querySelector('.one');
    let totalJoueur2 = document.querySelector('.two');
    if (currentJoueur1.className != 0) {
        totalJoueur1.innerHTML = parseInt(totalJoueur1.innerHTML) + parseInt(currentJoueur1.innerHTML);

    }
    if (totalJoueur1.innerHTML >= 100) {
        alert('Joueur 1 gagne!');
        currentJoueur1.innerHTML = 0;
        currentJoueur2.innerHTML = 0;
        totalJoueur1.innerHTML = 0;
        totalJoueur2.innerHTML = 0;
    }
    if (currentJoueur2.innerHTML != 0) {
        totalJoueur2.innerHTML = parseInt(totalJoueur2.innerHTML) + parseInt(currentJoueur2.innerHTML);

    }
    if (totalJoueur2.innerHTML >= 100) {
        alert('Joueur 2 gagne!');
        currentJoueur1.innerHTML = 0;
        currentJoueur2.innerHTML = 0;
        totalJoueur1.innerHTML = 0;
        totalJoueur2.innerHTML = 0;
    }
    currentJoueur1.classList.toggle('actif');
    currentJoueur2.classList.toggle('actif');
    currentJoueur1.classList.toggle('inactif');
    currentJoueur2.classList.toggle('inactif');
    currentJoueur1.innerHTML = 0;
    currentJoueur2.innerHTML = 0;
}

function rejouer() {
    let currentJoueur1 = document.querySelector('.un');
    let currentJoueur2 = document.querySelector('.deux');

    let totalJoueur1 = document.querySelector('.one');
    let totalJoueur2 = document.querySelector('.two');
    currentJoueur1.innerHTML = 0;
    currentJoueur2.innerHTML = 0;
    totalJoueur1.innerHTML = 0;
    totalJoueur2.innerHTML = 0;
}

let toucheLancer = document.querySelector('.lancer');
toucheLancer.addEventListener('click', lancer);


let toucheTenir = document.querySelector('.tenir');
toucheTenir.addEventListener('click', tenir);

let current1 = document.querySelector('.un');
let current2 = document.querySelector('.deux');

current1.classList.add('actif');
current2.classList.add('inactif');

let totalJoueur1 = document.querySelector('.one');
let totalJoueur2 = document.querySelector('.two');

let toucheRejouer = document.querySelector('.rejouer');
toucheRejouer.addEventListener('click', rejouer);


let signal1 = document.querySelector('.signal1');
let signal2 = document.querySelector('.signal2');

signal1.className = 'lumiere';


totalJoueur1.innerHTML = 0;
totalJoueur2.innerHTML = 0;