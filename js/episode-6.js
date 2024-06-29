// demander la moyenne de 3 nombres
const nombre1 = Number(prompt("Entrez votre 1ere note : "));
const nombre2 = Number(prompt("Entrez votre 2eme note : "));
const nombre3 = Number(prompt("Entrez votre 3eme note : "));

const moyenne = (nombre1 + nombre2 + nombre3) / 3;

alert(`Vous avez une moyenne de ${moyenne}`);