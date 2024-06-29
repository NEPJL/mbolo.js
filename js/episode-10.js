// demander le montant de la facture
let montantFacture = prompt("Entrez le montant : ")

let remise = 0;
if(isNaN(montantFacture)){
    alert('Attention ! Le montant de la facture doit être un nombre.')
}

let montantApayer = montantFacture - remise;
if(montantFacture > 40000){
    remise = montantFacture * 0.1; // calcul de la remise
}else{
    alert(`Malheureusement vous ne pouvez pas bénéficier d'une réduction.`)
}

let totoaApayer = montantFacture - remise;
// affiche le montant total à payer
alert(`Le montant total à payer est de : ${totalApayer.toFixed(2)} Franc FCFA.`);

