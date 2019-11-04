function add(a,b){
    return s = a+b;
}
function subtract(a,b){
    return res = a-b;
}
function multiply(a,b){
    return mul = a*b;
}
function divide(a,b){
    return divv = a/b;
}
function operate(number1,operator,number2){
    switch (operator){
        case 'plus':
            return add(number1,number2);
            break;
        case 'minus':
            return subtract(number1,number2);
            break;
        case 'times':
            return multiply(number1,number2);
            break;
        case 'divided by':
            return divide(number1,number2);
            break;
        default:
            prompt('Enter a basic opperator')
    }
}