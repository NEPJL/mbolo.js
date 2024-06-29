//demande à l'utilisateur de saisir un nombre
let nombre = (prompt("Entrez un nombre pour afficher sa table de multiplication : "));

if(isNaN(nombre)){
    alert(`Erreur : Veuillez entrez un nombre.`);
}

// affiche la table de multiplicaion
alert(`Table de multiplication de ${nombre} : `);
for(let i = 0; i<=10; i++){
    let resultat = nombre * i;
    alert(`${nombre} x ${i} = ${resultat}`)
}

