// DICHIARAZIONE VARIABILI SFIDANTI
var cpu1;
var cpu2;

// DEFINIZIONE SCELTA RANDOM DEI DUE SFIDANTI
// DEF GIOCATORE1
var cpu1 = Math.random();
if (cpu1<=0.33) {
  cpu1="Sasso";
}
else if (cpu1>0.33 && cpu1<=0.66) {
  cpu1="Carta";
}
else if (cpu1>0.66) {
  cpu1="Forbici";
}

//DEF GIOCATORE2
var cpu2 = Math.random();
if (cpu2<=0.33) {
  cpu2="Sasso";
}
else if (cpu2>0.33 && cpu2<=0.66) {
  cpu2="Carta";
}
else if (cpu2>0.66) {
  cpu2="Forbici";
}

// STAMPA SCELTA GIOCATORI
console.log(cpu1);
console.log(cpu2);

// FUNCTION PER DETERMINARE I RISULTATI DELLO SCONTRO
function risultato(giocatore1,giocatore2){

  //CASO 1: I DUE SFIDANTI GIOCANO LO STESSO SEGNO
  if (giocatore1===giocatore2) {
    return "Pareggio";
  }

  //CASO 2: IL GIOCATORE 1 GIOCA SASSO
  else if (giocatore1==="Sasso") {
    if (giocatore2==="Carta") {
      return "Giocatore 2, Hai vinto";
    }
    else if (giocatore2==="Forbici"){
      return "Giocatore 1, Hai vinto";
    }
  }

  //CASO 3: IL GIOCATORE 1 GIOCA CARTA
  else if (giocatore1==="Carta") {
    if (giocatore2==="Forbici") {
      return "Giocatore 2, Hai vinto";
    }
    else if(giocatore2==="Sasso"){
      return "Giocatore 1, Hai vinto";
    }
  }

  //CASO 4: IL GIOCATORE 1 GIOCA FORBICI
  else if (giocatore1==="Forbici") {
    if (giocatore2==="Sasso") {
      return "Giocatore 2, Hai vinto";
    }
    else if(giocatore2==="Carta"){
      return "Giocatore 1, Hai vinto";
    }
  }
}

// STAMPA DEL RISULTATO FINALE
console.log(risultato(cpu1,cpu2));
