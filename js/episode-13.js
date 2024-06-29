// Générer deux nombres aléatoires pour l'addition
let nombre1 = Math.floor(Math.random() * 100) + 1;
let nombre2 = Math.floor(Math.random() * 100) + 1;

// Calculer la somme correcte
let somme = nombre1 + nombre2;

// Boucle pour demander la réponse à l'utilisateur
let reponse = 0;
while (reponse !== somme) {
  // Afficher l'opération à l'utilisateur
  reponse = parseInt(prompt("Combien font " + nombre1 + " + " + nombre2 + " ? "));

  // Vérifier si la réponse est correcte
  if (reponse === somme) {
    alert("Bravo ! Vous avez trouvé la bonne réponse.");
  } else {
    alert("Erreur, la réponse incorrecte. Veuillez réessayer.");
  }
}