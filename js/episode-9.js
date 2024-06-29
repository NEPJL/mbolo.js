// demander la moyenne à l'utilisateur
let moyenne = parseFloat(prompt("Entrez votre note : "));

// Vérifier si la moyenne est compris entre 0 à 20
if(isNaN(moyenne) || moyenne < 0 || moyenne > 20 ){
    alert("Erreur ! La note doit être compris entre 0 et 20.");
    
}

// on affiche la mention en fonction de la note
let mention;
if(mention <= 10){
    alert("Insuffisant");
}else if(moyenne <= 12 ){
    alert("Passable");
}else if(moyenne <= 14 ){
    alert("Assez bien");
}else if(moyenne <= 18 ){
    alert("bien");
}else{
    alert("Très bien");
}