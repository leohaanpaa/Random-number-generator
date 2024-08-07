//Random number generator program

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;                                        //Defines the minimum number
const max = 6;                                        //Defines the maximum number
let randomNum;

myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min; //generates a random number between 1 and 6
    myLabel.textContent = randomNum;
}
//console.log(randomNum);                                //Displays the random number
