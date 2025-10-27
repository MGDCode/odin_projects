function add()
{
    let num1 = document.getElementById("box1").value;
    let num2  = document.getElementById("box2").value;
    let addedNum = parseFloat(num1) + parseFloat(num2);
    document.getElementById("answer").innerHTML = "Answer = " + addedNum;
}

function subtract()
{
    let num1 = document.getElementById("box1").value;
    let num2  = document.getElementById("box2").value;
    let subtractedNum = parseFloat(num1) - parseFloat(num2);
    document.getElementById("answer").innerHTML = "Answer = " + subtractedNum;
}
function multiply()
{
    let num1 = document.getElementById("box1").value;
    let num2  = document.getElementById("box2").value;
    let multipliedNum = parseFloat(num1) * parseFloat(num2);
    document.getElementById("answer").innerHTML = "Answer = " + multipliedNum;
}

function divide()
{
    let num1 = document.getElementById("box1").value;
    let num2  = document.getElementById("box2").value;
    let dividedNum = parseFloat(num1) / parseFloat(num2);
    document.getElementById("answer").innerHTML = "Answer = " + dividedNum;
}

function greet()
{
    let name  = document.getElementById("greeting").value;
    alert("Hello " + name);
}