//1 Stampare numeri da 1 a 100
//2 Selezionare multipli di 3 (% 3)
//3 Selezionare multipli di 5 (% 5)
//4 Selezionare multipli di 3 e 5
//5 Restituire ciclo finale corretto


//1

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  }
  else if (i % 5 === 0) {
    console.log("Buzz");
  }

  else if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  }

  else {
    console.log(i);
  }

}