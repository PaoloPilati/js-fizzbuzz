//1 Definire il ciclo da 1 a 100
//2 Selezionare multipli di 3 e 5
//3 Selezionare multipli di 3 (% 3)
//4 Selezionare multipli di 5 (% 5)
//5 Restituire le altre i nel ciclo 1-100


//1

for (let i = 1; i <= 100; i++) {

//2
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }

//3
  else if (i % 3 === 0) {
    console.log("Fizz");
  }

//4
  else if (i % 5 === 0) {
    console.log("Buzz");
  }

//5
  else {
    console.log(i);
  }

}