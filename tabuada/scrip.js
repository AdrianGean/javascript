// Seleção de elementos 
const multiplicationForm = document.querySelector("#multiplication-form")


const numberInput = document.querySelector("#number")


const multiplicationInput = document.querySelector("#multiplicator")

const multiplicationTable = document.querySelector("#multiplication-operations")

const multiplicationTitle = document.querySelector("#multiplication-title span")
// Funções 
const createTable = (number, multiplicationNumber) => {
    multiplicationTable.innerHTML = ""

    for(i=1; i <= multiplicationNumber; i++) {
        const result = number * i 

        const template = `<div class="row">
                        <div class="operation">${number} x ${i} = </div>
                        <div class = "result">${result}</div>
                        </div>`
     
        const parser = new DOMParser() // permite trasferir o código acima para HTML

        const htmlTemplate = parser.parseFromString(template,"text/html")

        const row = htmlTemplate.querySelector('.row')

        multiplicationTable.appendChild(row)
    }

    multiplicationTitle.innerText = number

}


// Eventos
multiplicationForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const multiplicationNumber = +numberInput.value // o + torna o número inteiro
    
    
    const multiplicatorNumber = +multiplicationInput.value
   
   if(!multiplicationNumber || !multiplicatorNumber) return
   
   
   createTable(multiplicationNumber, multiplicatorNumber)

})