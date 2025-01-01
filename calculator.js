/* VARIABLE DECLARATIONS */
let operand2Flag = false;
let operand1;
let operand2;
let operator;
/* VARIABLE DECLARATIONS */


/* PAGE ELEMENTS */
const body = document.querySelector("body");
const container = document.querySelector(".container");

const display = document.createElement("p");
display.classList.add("display");
/* PAGE ELEMENTS */


/* NUMBER BUTTONS */
const btn0 = document.querySelector("#btn0");
btn0.addEventListener("click", function (){
    if (!operand2Flag){
        if (!operand1)
            operand1 = 0;
        else
            operand1 = "" + operand1 + 0;
        display.textContent = "" + operand1;
    }
    else {
        if (!operand2)
            operand2 = 0;
        else
            operand2 = "" + operand2 + 0;
        display.textContent = "" + operand2;
    }
});

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function (){
    if (!operand2Flag){
        if (!operand1)
            operand1 = 1;
        else
            operand1 = "" + operand1 + 1;
        display.textContent = "" + operand1;
    }
    else {
        if (!operand2)
            operand2 = 1;
        else
            operand2 = "" + operand2 + 1;
        display.textContent = "" + operand2;
    }
});

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", function (){
    if (!operand2Flag){
        if (!operand1)
            operand1 = 2;
        else
            operand1 = "" + operand1 + 2;
        display.textContent = "" + operand1;
    }
    else {
        if (!operand2)
            operand2 = 2;
        else
            operand2 = "" + operand2 + 2;
        display.textContent = "" + operand2;
    }
});

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", function (){
    if (!operand2Flag){
        if (!operand1)
            operand1 = 3;
        else
            operand1 = "" + operand1 + 3;
        display.textContent = "" + operand1;
    }
    else {
        if (!operand2)
            operand2 = 3;
        else
            operand2 = "" + operand2 + 3;
        display.textContent = "" + operand2;
    }
});

const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", function (){
    if (!operand2Flag){
        if (!operand1)
            operand1 = 4;
        else
            operand1 = "" + operand1 + 4;
        display.textContent = "" + operand1;
    }
    else {
        if (!operand2)
            operand2 = 4;
        else
            operand2 = "" + operand2 + 4;
        display.textContent = "" + operand2;
    }
});

const btn5 = document.querySelector("#btn5");
btn5.addEventListener("click", function (){
    if (!operand2Flag){
        if (!operand1)
            operand1 = 5;
        else
            operand1 = "" + operand1 + 5;
        display.textContent = "" + operand1;
    }
    else {
        if (!operand2)
            operand2 = 5;
        else
            operand2 = "" + operand2 + 5;
        display.textContent = "" + operand2;
    }
});

const btn6 = document.querySelector("#btn6");
btn6.addEventListener("click", function (){
    if (!operand2Flag){
        if (!operand1)
            operand1 = 6;
        else
            operand1 = "" + operand1 + 6;
        display.textContent = "" + operand1;
    }
    else {
        if (!operand2)
            operand2 = 6;
        else
            operand2 = "" + operand2 + 6;
        display.textContent = "" + operand2;
    }
});

const btn7 = document.querySelector("#btn7");
btn7.addEventListener("click", function (){
    if (!operand2Flag){
        if (!operand1)
            operand1 = 7;
        else
            operand1 = "" + operand1 + 7;
        display.textContent = "" + operand1;
    }
    else {
        if (!operand2)
            operand2 = 7;
        else
            operand2 = "" + operand2 + 7;
        display.textContent = "" + operand2;
    }
});

const btn8 = document.querySelector("#btn8");
btn8.addEventListener("click", function (){
    if (!operand2Flag){
        if (!operand1)
            operand1 = 8;
        else
            operand1 = "" + operand1 + 8;
        display.textContent = "" + operand1;
    }
    else {
        if (!operand2)
            operand2 = 8;
        else
            operand2 = "" + operand2 + 8;
        display.textContent = "" + operand2;
    }
});

const btn9 = document.querySelector("#btn9");
btn9.addEventListener("click", function (){
    if (!operand2Flag){
        if (!operand1)
            operand1 = 9;
        else
            operand1 = "" + operand1 + 9;
        display.textContent = "" + operand1;
    }
    else {
        if (!operand2)
            operand2 = 9;
        else
            operand2 = "" + operand2 + 9;
        display.textContent = "" + operand2;
    }
});
/* NUMBER BUTTONS */


/* OPERATION BUTTONS */
const btnAdd = document.querySelector("#add");
btnAdd.addEventListener("click", function (){
    if (operator && !operand2){
        operand2Flag = false;
        operator = null;
    }

    if (operand2 || operand2 == 0) {
        operand1 = operate(operand1, operand2, operator);
        operand2 = null;
    }
    else {
        operand2Flag = !operand2Flag;
    }
    operator = 1;
});

const btnSub = document.querySelector("#sub");
btnSub.addEventListener("click", function (){
    if (operator && !operand2){
        operand2Flag = false;
        operator = null;
    }

    if (operand2) {
        operand1 = operate(operand1, operand2, operator);
        operand2 = null;
    }
    else {
        operand2Flag = !operand2Flag;
    }
    operator = 2;
});

const btnMul = document.querySelector("#mult");
btnMul.addEventListener("click", function (){
    if (operator && !operand2){
        operand2Flag = false;
        operator = null;
    }

    if (operand2) {
        operand1 = operate(operand1, operand2, operator);
        operand2 = null;
    }
    else {
        operand2Flag = !operand2Flag;
    }
    operator = 3;
});

const btnDiv = document.querySelector("#divi");
btnDiv.addEventListener("click", function (){
    if (operator && !operand2){
        operand2Flag = false;
        operator = null;
    }

    if (operand2) {
        operand1 = operate(operand1, operand2, operator);
        operand2 = null;
    }
    else {
        operand2Flag = !operand2Flag;
    }
    operator = 4;
});

const btnBackspace = document.querySelector("#backspace");
btnBackspace.addEventListener("click", function (){
    if (!operand2Flag){
        operand1 = null;
        display.textContent = "";
    }
    else {
        operand2 = null;
        display.textContent = "";
    }
});

const btnCalculate = document.querySelector("#calculate");
btnCalculate.addEventListener("click", function (){
    operate(operand1, operand2, operator);
});

const btnClear = document.querySelector("#clear");
btnClear.addEventListener("click", function (){
    clear();
});
/* OPERATION BUTTONS */


/* UPDATE PAGE ELEMENTS */
container.appendChild(display);
body.appendChild(container);
/* UPDATE PAGE ELEMENTS */


/* OPERATION FUNCTIONS */
function clear () {
    operand2Flag = false;
    operand1 = null;
    operand2 = null;
    operator = null;
    display.textContent = "";
}

function operate (one, two, operation) {
    if ((!one && one != 0) || (!two && two != 0))
        return;

    let result;
    
    if (operation == 1) {
        result = add(one, two);
    }
    else if (operation == 2) {
        result = sub(one, two);
    }
    else if (operation == 3) {
        result = mul(one, two)
    }
    else if (operation == 4) {
        result = div(one, two)
    }
    
    display.textContent = result;
    return result;
}

function add (one, two) {
    return(+one + +two);
}
function sub (one, two) {
    return(+one - +two);
}
function mul (one, two) {
    return(+one * +two);
}
function div (one, two) {
    if (two == 0) {
        display.textContent = "ERROR: DIVISION BY 0";
        return
    }
    return(+one / +two);
}
/* OPERATION FUNCTIONS */