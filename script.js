
const valid_numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.']
const valid_operators = ['+', '-', '*', '/', '÷', '×']

let display = document.getElementsByClassName("display-text")

let last_input = ""
let last_type_input = ""

let account = ""

let resultOn = false
let hasPoint = false

let pointOn = true


function addToAccount(button) {

    const new_input = button.innerText
    const new_type_input = checkInput(new_input)

    if (new_type_input == "none") {
        return 0;
    }

    if (new_type_input == "operator" && last_type_input == "operator"){
        return 0;
    }

    if (new_input == '.' && last_type_input == "operator") {
        return 0;
    }

    if (new_type_input == "operator" && last_input == '.') {
        return 0;
    }

    if (new_type_input == "operator" && account == ""){
        return 0;
    }

    if (account.length > 0) {
        if (new_input == '.' && new_type_input == "operator") {
            return 0;
        }

        if (new_input == '.' && last_input == '.'){
            return 0;
        }
    }

  
    if ((resultOn && valid_numbers.includes(new_input)) || account == "0"){
        account = "" 
    }

    if (new_input == '.'){
        if (pointOn == true){
            pointOn = false
        }
        else {
            return 0;
        }
        
    }
    

    if(new_type_input == "operator") {
        pointOn = true
    }


    resultOn = false
    
    account += new_input
    updateDisplay(account)

    last_input = new_input
    last_type_input = new_type_input

    return 0
}


function equalsAccount(){
    let result

    account = replaceAccountOperators()

    try {
        result = eval(account)
    }
    catch (error) {
        result = "error"
    }
    
    account = result
    updateDisplay(Number.isInteger(result) ? result.toString() : parseFloat(result.toFixed(8))).toString()

    
    resultOn = true

    return 0
}


function updateDisplay(value ){
    display[0].innerText = value
}


function clearAccount() {
    account = "0"
    updateDisplay("0")
}


function checkInput(input){
    if (!(valid_numbers.includes(input)  || valid_operators.includes(input))) {
        alert("Use only valid values.")
        return "none"
    }

    if (valid_numbers.includes(input)){
        if (input == "."){
        }
        return "number"
    }
    else {
        return "operator"
    }

}

function replaceAccountOperators() {
    new_account = account

    new_account = new_account.replaceAll("×", "*")
    new_account = new_account.replaceAll("÷", "/")

    return new_account
}