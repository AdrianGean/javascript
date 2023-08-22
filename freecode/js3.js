const arr = [
    [1, 2], [3, 4], [5, 6]
  ];
  
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {  // esse for será executado até que a condição dele seja falsa, quando a condição se tornar falsa o loop para e retorna para o for de cima o 1° for
      console.log(arr[i][j]);
    }
  }