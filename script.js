
const valid_numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
const valid_operators = ['+', '-', '*', '/', '÷', '×']

let display = document.getElementsByClassName("display-text")

let resultOn = false

let account = ""


function addToAccount(button) {

    const new_input = button.innerText

    checkInput(new_input)

    if ((resultOn && valid_numbers.includes(new_input)) || account == "0"){
        account = ""    
    }

    resultOn = false
    
    account += new_input
    updateDisplay(account)

    return 0
}


function equalsAccount(){
    let result
    
    account = replaceAccountOperators()

    try {
        result = eval(account)
    }
    catch (error) {
        result = "Error"
    }
    
    account = result
    updateDisplay(result.toString())
    resultOn = true

    return 0
}


function updateDisplay(value){
    display[0].innerText = value
}


function clearAccount() {
    account = "0"
    updateDisplay("0")
}


function checkInput(input){
    if (!(valid_numbers.includes(input)  || valid_operators.includes(input))) {
        alert("Use only valid values.")
        return 1
    }
    return 0
}

function replaceAccountOperators() {
    new_account = account

    new_account = new_account.replace("×", "*")
    new_account = new_account.replace("÷", "/")

    return new_account
}