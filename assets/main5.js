//Scrivi una funzione che accetti tre argomenti: un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array). La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”
var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numeri);

var numeriDue = [];

function intervallo(arr1, arr2, num1, num2) {
  if(num1 < num2 && num2 <= arr1.length) {
    for(var i = num1; i <= num2; i++) {
      arr2.push(arr1[i]);
    }
  } else {
    console.log("C'è qualquadra che non cosa");
  }
}

intervallo(numeri, numeriDue, 0, 6);

console.log(numeriDue);
