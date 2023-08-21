function nextInLine(arr, item) { // (arr = testArr = [1, 2, 3, 4, 5],                             item = 6)
    // Altere apenas o código abaixo desta linha
    arr.push(item) // testArr = [1,2,3,4,5,6]           item = 6
    item = arr.shift() // testArr = [2,3,4,5,6]         item = 1
    return item;
    // Altere apenas o código acima desta linha
  }
  
  // Configuração
  let testArr = [1, 2, 3, 4, 5];
  
  // Exibir o código
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6)); // o pulo do gato é entender que a função nextInLine tá sendo chamada com os argumentos (testArr, 6)
  console.log("After: " + JSON.stringify(testArr));




let count = 0;

function cc(card) {
  // Altere apenas o código abaixo desta linha
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6: 
      count++ 
      break
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count-- 
      break
  }
  let holdbet = 'Hold'
  if (count > 0) {
    holdbet = 'Bet'
  }
 

  return count + ' ' + holdbet;
  // Altere apenas o código acima desta linha
}

cc(2); cc(3); cc(7); cc('K'); cc('A');