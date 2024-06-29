//demander le nom et le sexe a l'utilisateur
const nom = prompt("Entrez votre nom  ici : ");
const sexe = prompt("Votre sexe ");

// on verifie les conditions
if(sexe.toUpperCase() === 'F' || sexe.toLocaleLowerCase() === 'f' || sexe === 'Feminin' || sexe === 'Féminin' || sexe.toUpperCase === 'féminin'){
    alert(`Bonjour madame ${nom}`)
}
else if(sexe.toUpperCase() === 'M' || sexe.toLocaleLowerCase() === 'm' || sexe === 'Masculin' || sexe.toLowerCase === 'masculin'){
    alert(`Bonjour monsieur ${nom}`)
}else{
    alert(`Erreur ! Sexe non reconnu. Veuillez entrez 'H' ou 'F'.`);
}