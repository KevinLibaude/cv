let porteGauche = document.querySelector(".porte_gauche");
let porteDroite = document.querySelector(".porte_droite");
let container = document.querySelector(".container");
let contenu = document.querySelector(".contenu");
let boutonAccess = document.querySelector(".access");

// Définissez la durée de chargement en millisecondes
const dureeChargement = 3000;

// Sélectionnez la barre de chargement
const barreChargement = document.querySelector('.barre-chargement');
const progression = document.querySelector('.progression');

// Sélectionnez les champs du formulaire
const champNom = document.querySelector('#nom');
const champEmail = document.querySelector('#email');
const champMessage = document.querySelector('#message');
const champEnvoyer = document.querySelector('#envoyer');
const error = document.querySelector('.error');
const success = document.querySelector('.success');


let ouvertureGauche = "ouvertureGauche";
let ouvertureDroite = "ouvertureDroite";
let contentOpacity = "contentOpacity"

boutonAccess.addEventListener("click", ouverturePortes);
boutonAccess.addEventListener('click',function(e){
    boutonAccess.style.display = "none";
});

// Exemple de fonction pour un défilement fluide vers un élément
function scrollToElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Utilisation de la fonction
scrollToElement('header');

function ouverturePortes() {
    porteGauche.classList.add(ouvertureGauche);
    porteDroite.classList.add(ouvertureDroite);
    contenu.classList.add(contentOpacity);
    setTimeout(cvAccess, 0);
}

function cvAccess() {
    contenu.style.display = "block";
    
}

// Sélectionnez le formulaire
const formulaire = document.querySelector('#formulaire-contact');

// Ajoutez un événement listener pour l'événement submit
formulaire.addEventListener('submit', (e) => {
  // Empêchez la soumission du formulaire si les champs ne sont pas valides
  if (!formulaire.checkValidity()) {
    e.preventDefault();
    // Affichez un message d'erreur
    error.style.display = "block";
  }
});

champEnvoyer.addEventListener('click', function(event) {
    event.preventDefault();
    if(formulaire.checkValidity()){
        success.style.display = "block";
        formulaire.reset();
    }
});

// Sélectionnez l'élément sur lequel vous souhaitez activer le scroll smooth
const element = document.querySelector('.contenu');

// Ajoutez un écouteur d'événement pour détecter le défilement
element.addEventListener('wheel', (e) => {
  // Annulez le défilement par défaut
  e.preventDefault();

  // Obtenez la position actuelle du contenu
  const scrollTop = element.scrollTop;

  // Ajoutez ou soustrayez la valeur de défilement à la position actuelle
  const newScrollTop = scrollTop + e.deltaY;

  // Utilisez la méthode scrollSmooth pour déplacer le contenu de manière lisse
  element.scrollTop = newScrollTop;
});

