// demander l'age de l'utilisateur et declare un statut à l'utilisateur
const age = Number(prompt("Entrez votre âge : "));

// condition
if(age >= 18){
    alert(`Vous êtes majeur, car vous avez ${age} ans.`)
}else{
    alert(`Vous êtes mineur, car vous avez ${age} ans.` )
}