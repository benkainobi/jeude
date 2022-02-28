function hasard() {
    let de = document.querySelector('.de');
    let current1 = document.querySelector('.un');
    let current2 = document.querySelector('.deux');
    let currentActif = document.querySelector('.current.actif2');

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
    }

    if (n == 2) {
        de.className = 'de zwei';
        currentActif.innerHTML = parseInt(currentActif.innerHTML) + 2;
    }
    if (n == 3) {
        de.cclassName = 'de drei';
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
    let currentActif = document.querySelector('.current.actif2');
    let totalActif = document.querySelector('.total.actif2');



    total1.classList.toggle('actif2');
    total2.classList.toggle('actif2');


    totalActif.innerHTML = parseInt(totalActif.innerHTML) + parseInt(currentActif.innerHTML);
    current1.classList.toggle('actif2');
    current2.classList.toggle('actif2');
    signal1.classList.toggle('actif');
    signal2.classList.toggle('actif');

    if (total1.innerHTML >= 100) {
        alert('Joueur 1 gagne!');
        rejouer()
    }
    if (total2.innerHTML >= 100) {
        alert('Joueur 2 gagne!');
        rejouer()
    }



    current1.innerHTML = 0;
    current2.innerHTML = 0;
}

function rejouer() {
    total1.innerHTML = 0;
    total2.innerHTML = 0;
    current1.innerHTML = 0;
    current2.innerHTML = 0;
}

let toucheLancer = document.querySelector('.lancer');
toucheLancer.addEventListener('click', hasard);





let signal1 = document.querySelector('.signal1');
let signal2 = document.querySelector('.signal2');
signal1.classList.add('actif');

let current1 = document.querySelector('.un');
current1.innerHTML = 0;

let current2 = document.querySelector('.deux');
current2.innerHTML = 0;

current1.classList.add('actif2');
let currentActif = document.querySelector('.current.actif2');

let boutonTenir = document.querySelector('.tenir');
boutonTenir.addEventListener('click', tenir);

let total = document.querySelectorAll('.total');
total.innerHTML = 0;

let total1 = document.querySelector('.total.one');
let total2 = document.querySelector('.total.two');

total1.innerHTML = 0;
total2.innerHTML = 0;

total1.classList.toggle('actif2');

let toucheRejouer = document.querySelector('.rejouer');
toucheRejouer.addEventListener('click', rejouer);