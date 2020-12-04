//SNACK 2
//Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

function reverse(string) {
  return string.split("").reverse().join("");
}

var parola = 'ciao';

console.log(parola);

console.log(reverse(parola));
