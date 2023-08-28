//Adapte a promessa para ambas as situações de sucesso e fracasso. Se responseFromServer for true, chame o método resolve para completar a promessa com sucesso. Passe a string We got the data como argumento para o método resolve. Se responseFromServer for false, passe a string Data not received como argumento para o método reject.

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer representa uma resposta de um servidor
    let responseFromServer;
  
    if(responseFromServer) {
      resolve('We got the data')// Altere esta linha
    } else {  
      reject('Data not received')// Altere esta linha
    }
  });