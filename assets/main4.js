//SNACK 4
//Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].
var lettere = ['a', 'b', 'c', 'd'];

var numeri = [1, 2, 3, 4];

console.log(lettere, numeri);

var lettereNumeri = [];

function fusione(arr1, arr2, arr3) {
  for (var i = 0; arr3.length < (arr2.length + arr1.length); i++) {
    arr3.push(arr1[i], arr2[i]);
  }
}

fusione(lettere, numeri, lettereNumeri);

console.log(lettereNumeri);