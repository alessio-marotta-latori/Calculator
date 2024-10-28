let number1 = "";
let number2 = "";
let operator = "";
let nownumbertwo = false;
let stillequal = false;


const add = (a,b)=> {
    return a + b;
}
const subtract = (a,b)=>{
    return a - b;
}
const multiply = (a,b)=>{
    return a * b;
}
const divide = (a,b)=> {
    if (b === 0) {
        return NaN;
    }
    else{
        return a / b;
    }
}
const operate = (number1,number2,operator)=>{
    if (operator === "+"){
        return add(number1,number2);
    }
    else if (operator === "-"){
        return subtract(number1,number2);
    }
    else if (operator === "x"){
        return multiply(number1,number2);
    }
    else if (operator === "÷"){
        return divide(number1,number2);
    }
}
const output = document.getElementById("storage")
const setOperator = (op) => {
    if (nownumbertwo) {
        number1 = operate(+number1, +number2, operator);
        output.textContent = Number.isInteger(number1) ? number1 : number1.toFixed(2);
        number2 = ""; 
    }
    operator = op; 
    nownumbertwo = true; 
    stillequal = false;
};
const zerobtn = document.getElementById("zero")
zerobtn.addEventListener("click",function(){
    if(stillequal){
        output.textContent = "";
        stillequal = false;
    }
   output.textContent += "0";
    if (!nownumbertwo) {
            number1 += "0"
        }
        else if (nownumbertwo){
            number2 += "0"
        }
});

const einsbtn = document.getElementById("eins")
einsbtn.addEventListener("click",function(){
    if(stillequal){
        output.textContent = "";
        stillequal = false;
    }
    if(!stillequal){
        output.textContent += 1;
        if (!nownumbertwo) {
            number1 += "1"
        }
        else if (nownumbertwo){
            number2 += "1"
        }
    }
});

const zweibtn = document.getElementById("zwei")
zweibtn.addEventListener("click",function(){
    if(stillequal){
        output.textContent = "";
        stillequal = false;
    }
    if(!stillequal){
        output.textContent += 2;
        if (!nownumbertwo) {
            number1 += "2"
        }
        else if (nownumbertwo){
            number2 += "2"
        }
    }
});

const dreibtn = document.getElementById("drei")
dreibtn.addEventListener("click",function(){
    if(stillequal){
        output.textContent = "";
        stillequal = false;
    }
    output.textContent += 3;
    if (!nownumbertwo) {
        number1 += "3"
    }
    else if (nownumbertwo){
        number2 += "3"
    }
});

const vierbtn = document.getElementById("vier")
vierbtn.addEventListener("click",function(){
    if(stillequal){
        output.textContent = "";
        stillequal = false;
    }
    output.textContent += 4;
    if (!nownumbertwo) {
        number1 += "4"
    }
    else if (nownumbertwo){
        number2 += "4"
    }
});

const fünfbtn = document.getElementById("fünf")
fünfbtn.addEventListener("click",function(){
    if(stillequal){
        output.textContent = "";
        stillequal = false;
    }
    output.textContent += 5;
    if (!nownumbertwo) {
        number1 += "5"
    }
    else if (nownumbertwo){
        number2 += "5"
    }
});

const sechsbtn = document.getElementById("sechs")
sechsbtn.addEventListener("click",function(){
    if(stillequal){
        output.textContent = "";
        stillequal = false;
    }
    output.textContent += 6;
    if (!nownumbertwo) {
        number1 += "6"
    }
    else if (nownumbertwo){
        number2 += "6"
    }
});

const siebenbtn = document.getElementById("sieben")
siebenbtn.addEventListener("click",function(){
    if(stillequal){
        output.textContent = "";
        stillequal = false;
    }
    output.textContent += 7;
    if (!nownumbertwo) {
        number1 += "7"
    }
    else if (nownumbertwo){
        number2 += "7"
    }
});

const achtbtn = document.getElementById("acht")
achtbtn.addEventListener("click",function(){
    if(stillequal){
        output.textContent = "";
        stillequal = false;
    }
    output.textContent += 8;
    if (!nownumbertwo) {
        number1 += "8"
    }
    else if (nownumbertwo){
        number2 += "8"
    }
});

const neunbtn = document.getElementById("neun")
neunbtn.addEventListener("click",function(){
    if(stillequal){
        output.textContent = "";
        stillequal = false;
    }
    output.textContent += 9;
    if (!nownumbertwo) {
        number1 += "9"
    }
    else if (nownumbertwo){
        number2 += "9"
    }
});

const deleatbtn = document.getElementById("deleat")
deleatbtn.addEventListener("click",function(){
    output.textContent = "";
    nownumbertwo = false;
    number1 = "";
    number2 = "";
    operator = "";
});

const dividebtn = document.getElementById("divide")
dividebtn.addEventListener("click",function(){
    setOperator("÷");
    output.textContent += " ÷ ";
    
});

const multiplybtn = document.getElementById("multiply")
multiplybtn.addEventListener("click",function(){
    setOperator("x");
    output.textContent += " x ";
});

const subtractbtn = document.getElementById("subtract")
subtractbtn.addEventListener("click",function(){
    setOperator("-");
    output.textContent += " - ";
});

const addbtn = document.getElementById("add")
addbtn.addEventListener("click",function(){
    setOperator("+");
    output.textContent += " + ";
});

const equalbtn = document.getElementById("equal");
equalbtn.addEventListener("click", function() {
    number1 = +number1; 
    number2 = +number2;
    let result = operate(number1, number2, operator); 
    if (isNaN(result)) {
        output.textContent = "Error: Cannot divide by zero";
        number1 = ""; 
        number2 = "";
        operator = "";
        nownumbertwo = false;
        stillequal = true;
        return;
    }
    if (!Number.isInteger(result)) {
        result = result.toFixed(2); 
    }
    output.textContent = result;
    
    number1 = result;
    number2 = "";
    operator = "";
    nownumbertwo = false;
    stillequal = true;
});
