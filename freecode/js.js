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