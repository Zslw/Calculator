let mainDisplay = '0';
let secondaryDisplay = '0';
const buttons = document.querySelectorAll('button');
buttons.forEach((button, mainDisplay) => button.addEventListener('click', buttonEvent));

function buttonEvent(e) {
    processEvent(e.target.innerText);
};

function processEvent(value) {//This is the main functiion.
    const md = document.querySelector('#mainDisplay');
    const sd = document.querySelector('#secondaryDisplay');

    let operatorArray = mainDisplay.split(" ");
    //  trailing space was added. 
    if (operatorArray[operatorArray.length-1] === "") operatorArray.splice(operatorArray.length-1,1);
    let lastMd = operatorArray[operatorArray.length-1] 
    console.log(lastMd)


    // Loop to run through the various buttons that couuld be made.  Could be re-factored at a later date.
    if (value === "c" ) {
        mainDisplay="0";
        md.classList.add("newNumber");
        secondaryDisplay = "";
        sd.innerText = secondaryDisplay;
    }else if (value === "BS") {
        if (mainDisplay.length === 1 || md.classList.contains("newNumber")) {
            mainDisplay="0";
        } else {
            if (lastMd === " ") mainDisplay=mainDisplay.slice(0, -1);
            mainDisplay=mainDisplay.slice(0, -1);
        }
    }else if (!isNaN(value)){
        if (mainDisplay === "0"  || md.classList.contains("newNumber")) {
            md.classList.remove("newNumber");
            mainDisplay = value;
        }else { 
            mainDisplay+=value;
        }
    }else if (value === ".") {
        if (!operatorArray[operatorArray.length-1].includes(".")) {
            mainDisplay+=value;
            md.classList.remove("newNumber");
        }
    }else if (value !== "=" && !isNaN(lastMd)){
        mainDisplay = mainDisplay+ " " + value + " ";
        md.classList.remove("newNumber");
    } else if (value === "=") {
            md.classList.add("newNumber");
            operate();
    }

    md.innerText = mainDisplay;
}

function add(a,b){
    return Number(a)+Number(b);
}
function subtract(a,b){
    return Number(a)-Number(b);
}
function multiply(a,b){
    return Number(a)*Number(b);
}
function divide(a,b){
    return round(Number(a)/Number(b),4);
}

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function operate(){
    const md = document.querySelector('#mainDisplay');
    const sd = document.querySelector('#secondaryDisplay');
    sd.innerText = mainDisplay;
    let operatorArray = mainDisplay.split(" ");

    if (operatorArray.length%2 === 0){
        console.log("remove trailing operator");
        operatorArray.splice(operatorArray.length-1,1);
    }

    let number1 = operatorArray[0];
    let operator = operatorArray[1];
    let number2 = operatorArray[2];
    let output = 0;
    switch (operator){
        case '+':
            output = add(number1,number2);
            break;
        case '-':
            output = subtract(number1,number2);
            break;
        case '×':
            output = multiply(number1,number2);
            break;
        case '÷':
                if (number2 == 0) {
                    sd.innerText = "";
                    alert("Can't divide by 0")
                } 
            output = divide(number1,number2);
            break;
        default:
            alert('Enter a basic opperator');
    }

    if(isNaN(output) === true){ 
        processEvent('c');
    } else{
    mainDisplay = ""+ output; //Make sure that this casts to string
    md.innerText = mainDisplay;
    sd.innerText = sd.innerText + " = " + output;
    }
}