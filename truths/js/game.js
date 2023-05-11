//quiz gang gang//

//global variable for first name - one that can be used in all functions//

let fname = "";

//function to get info from intro form

function greet() {
    let greetParagraph = document.getElementById("greet");
    fname = document.getElementById("fname").value;

    let lname = document.getElementById("lname").value;

    let age = document.getElementById("age").value;

    //check the input
    console.log("hasd")
    console.log(fname +  age +  lname)
    if(fname==="" || lname===""){
        alert("first and last name cannot be empty");
        return;
    }
    if (age==="" || age <18) {
        alert("Too young!")
        return;
    }

    greetParagraph.innerHTML = "Greetings " + age + " year old " + fname+"!";
}

//game

function trivia1(){
    let triviaAnswer = document.getElementById("trivia-answer");
let tunaSelected = document.getElementById("tuna").checked;
    let chocSelected = document.getElementById("chocolate").checked;
let honeySelected = document.getElementById("honey").checked;

if(chocSelected) {
    triviaAnswer.innerHTML = fname + " you are wrong";
}

else if(tunaSelected) {
    triviaAnswer.innerHTML = fname + " wronggg";
}
else if(honeySelected) {
    triviaAnswer.innerHTML = fname + " correct!";
}
else {
    triviaAnswer.innerHTML = " something went wrong";
}

}

//lie


function lie1(){
    let lieAnswer = document.getElementById("lie-answer");
let true1Selected = document.getElementById("green").checked;
    let lieSelected = document.getElementById("bmx").checked;
let true2Selected = document.getElementById("cars").checked;

if(lieSelected) {
    lieAnswer.innerHTML = fname + " you are right!";
}

else if(true1Selected) {
    lieAnswer.innerHTML = fname + " wrong!";
}
else if(true2Selected) {
    lieAnswer.innerHTML = fname + " nope nope";
}
else {
    lieAnswer.innerHTML = " something went wrong";
}

}

