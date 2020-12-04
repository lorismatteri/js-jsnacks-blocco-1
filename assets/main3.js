//SNACK 3
//Crea 10 oggetti che rappresentano una zucchina.
//Dividi in due array separati le zucchine che misurano meno o più di 15cm.
//Infine stampa separatamente quanto pesano i due gruppi di zucchine

var zucchine = [
  {
    varieta: 'zucchina chiara di Faenza',
    peso: 1,
    lunghezza: 10
  },
  
  {
    varieta: 'zucchina scura di Faenza',
    peso: 2,
    lunghezza: 20
  },
  
  {
    varieta: 'zucchina gialla di Faenza',
    peso: 3,
    lunghezza: 10
  },
  
  {
    varieta: 'zucchina arancione di Faenza',
    peso: 4,
    lunghezza: 20
  },
  
  {
    varieta: 'zucchina rossa di Faenza',
    peso: 5,
    lunghezza: 10
  },

  {
    varieta: 'zucchina verde di Faenza',
    peso: 6,
    lunghezza: 20
  },
  
  {
    varieta: 'zucchina nera di Faenza',
    peso: 7,
    lunghezza: 20
  },
  
  {
    varieta: 'zucchina grossa di Faenza',
    peso: 8,
    lunghezza: 10
  },
  
  {
    varieta: 'zucchina piccola di Faenza',
    peso: 9,
    lunghezza: 10
  },
  
  {
    varieta: 'zucchina media di Faenza',
    peso: 10,
    lunghezza: 20
  },

]

var zucchineLunghe = [];

var zucchineCorte = [];

for (var key in zucchine) {
  if (zucchine[key].lunghezza < 15) {
    zucchineCorte.push(zucchine[key]);
  } else if (zucchine[key].lunghezza > 15) {
    zucchineLunghe.push(zucchine[key]);
  }
}

console.log(zucchine);
console.log(zucchineCorte);
console.log(zucchineLunghe);

var pesoCorte = 0;

for (var i = 0; i < zucchineCorte.length; i++) {
    pesoCorte = pesoCorte + zucchineCorte[i].peso;
}

console.log(pesoCorte);

var pesoLunghe = 0;

for (var i = 0; i < zucchineLunghe.length; i++) {
    pesoLunghe = pesoLunghe + zucchineLunghe[i].peso;
}

console.log(pesoLunghe);

