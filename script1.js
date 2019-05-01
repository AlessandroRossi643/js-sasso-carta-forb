// VERSIONE 2

// DEFINIZIONE FUNZIONE SCELTA GIOCATA DEI DUE PLAYER
function sceltagiocata(scelta,segno){
  var scelta = Math.random();
  if (scelta<=0.33) {
    segno="Sasso";
  }
  else if (scelta>0.33 && scelta<=0.66) {
    segno="Carta";
  }
  else if (scelta>0.66) {
    segno="Forbici";
  }
  return segno;
}
var sceltafinale=(sceltagiocata());
console.log(sceltafinale);

// UTILIZZO FUNZIONE PER ASSEGNARE I VALORI AI DUE PLAYER
var cpu1= sceltagiocata();
document.getElementById('player1').innerHTML="GIOCATORE 1: "+ cpu1;

var cpu2= sceltagiocata();
document.getElementById('player2').innerHTML="GIOCATORE 2: "+ cpu2;

// FUNCTION PER DETERMINARE I RISULTATI DELLO SCONTRO
function risultato(giocatore1,giocatore2){

  switch (giocatore1,giocatore2) {
    case giocatore1===giocatore2:
      return "Pareggio!";
      break;

    case giocatore1==="Carta" && giocatore2==="Sasso":
    case giocatore1==="Sasso" && giocatore2==="Forbici":
    case giocatore1==="Forbici" && giocatore2==="Carta":
      return "Giocatore 1, Hai vinto!";
      break;

    case giocatore1==="Sasso" && giocatore2==="Carta":
    case giocatore1==="Forbici" && giocatore2==="Sasso":
    case giocatore1==="Carta" && giocatore2==="Forbici":
      return "Giocatore 2, Hai vinto!";
      break;
  }
}

// STAMPA DEL RISULTATO FINALE
document.getElementById("risultato").innerHTML=(risultato(cpu1,cpu2));
