/*// ============================================
// Atelier MoveSpot : découvrir le DOM et JavaScript
// Suis le document de l'atelier, étape par étape.
// Enregistre (Ctrl+S), recharge la page et teste à chaque étape.
// ============================================

// Étape 1 : parler à la console

console.log("Hello World !");
console.log("mehdi");
// Étape 2 : les variables
const nom = "mehdi";
let prix = 25;
let place = 0;
console.log(`bonjourr  monsieur ${nom} : ` );
console.log(` le  prix de votre commande est : ${prix} :`);
console.log(`le prix de place reeserve est ${place} :`);
console.log(`le prix  totale a payer est de ${ prix * place} : `);
// Étape 3 : trouver un élément de la page
const message = document.getElementById(`message`);
const spanplaces = document.getElementById(`places`);
const bntreserver = document.getElementById(`btn-reserver`);
const btnannuler = document.getElementById(`btn-annuler`);
console.log(message);
console.log(spanplaces);
console.log(bntreserver);

// Étape 4 : modifier le texte
message.textContent =`bonjourr  monsieur ${nom}  le  prix de votre commande est :
 ${prix} et le nombre de place reeserve est :
  ${place}  alors le prix  totale a payer est de : ${ prix * place}  `;

// Étape 5 : réagir à un clic
/*btnannuler.addEventListener('click', function () {
  place = place - 1;
    spanplaces.textContent = place ;
});*/
/*bntreserver.addEventListener(`click` , function(){
    place = place + 1;
    spanplaces.textContent = place ;
    message.textContent = `reservation  ajoute avecc succes`
}); 

// Étape 6 : décider avec if

/*btnannuler.addEventListener('click', function () {
if( place > 0){
    place= place - 1;
    spanplaces.textContent = place;
}
else{
    message.textContent = `Désolé, le cours est complet.`
}
});
// Étape 7 : changer l'apparence avec les classes
/*const carteYoga = document.getElementById('carte-yoga');
carteYoga.addEventListener('click', function () {
carteYoga.classList.toggle(`ring-2`);
carteYoga.classList.toggle(`ring-teal-600`);});                                                                                                                                                              
/*carteYoga.style.border = '2px solid green';
});*/

/*
// Étape 8 : faire la même chose pour toutes les cartes
const cartes = document.querySelectorAll('.carte');
cartes.forEach(function (carte) {
 carte.addEventListener('click', function () {
 // 1. on retire la sélection de toutes les cartes
 cartes.forEach(function (c) {
 c.classList.remove('ring-2', 'ring-teal-600');
 });
 // 2. on sélectionne seulement la carte cliquée
 carte.classList.add('ring-2', 'ring-teal-600');
 });
});
*/

// Étape 9 : un tableau d'objets et une boucle
const cours = [
    { nom: "Yoga", prix: 100 , coach:said , duree:4},
    { nom: "Cardio", prix: 80 , coach:adam , duree:54},
    { nom: "Boxe", prix: 90 , coach:mehdi , duree:654}
];

cours.forEach(c => {
    console.log(c.nom + " coûte " + c.prix + " DH" + c.coaach + "temps est " + c.dureee +"min");
});
// Étape 10 : calculer un total
