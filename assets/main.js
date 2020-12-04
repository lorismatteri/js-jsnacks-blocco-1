//SNACK 1
//Crea 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
//Calcola quanto pesano tutte le zucchine.

var zucchine = [
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 1,
    lunghezza: 15
  },
  
  {
    varieta: 'zucchina scura di Faenza',
    peso: 2,
    lunghezza: 15
  },
  
  {
    varieta: 'zucchina gialla di Faenza',
    peso: 3,
    lunghezza: 15
  },
  
  {
    varieta: 'zucchina arancione di Faenza',
    peso: 4,
    lunghezza: 15
  },
  
  {
    varieta: 'zucchina rossa di Faenza',
    peso: 5,
    lunghezza: 15
  },

  {
    varieta: 'zucchina verde di Faenza',
    peso: 6,
    lunghezza: 15
  },
  
  {
    varieta: 'zucchina nera di Faenza',
    peso: 7,
    lunghezza: 15
  },
  
  {
    varieta: 'zucchina grossa di Faenza',
    peso: 8,
    lunghezza: 15
  },
  
  {
    varieta: 'zucchina piccola di Faenza',
    peso: 9,
    lunghezza: 15
  },
  
  {
    varieta: 'zucchina media di Faenza',
    peso: 10,
    lunghezza: 15
  },

]

console.log(zucchine);
  
var somma = 0;

for (var i = 0; i < zucchine.length; i++) {
    somma = somma + zucchine[i].peso;
}

console.log(somma);
  

