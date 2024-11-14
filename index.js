import {addThis, subtractThis, divideThis, multiplyThis} from 'mobimath'

// Numbers :D (Parse val1 and val2 from string to int)
var total = 0
var value1 = 0
var value2 = 0

var ready = (callback) => {
    if(document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => {
    var val1 = document.getElementById('value1');
    var val2 = document.getElementById('value2');

    const add = document.getElementById('adding');
    const subtract = document.getElementById('subtracting');
    const multiply = document.getElementById('multiplying');
    const divide = document.getElementById('dividing');
    var display_Counter = document.getElementById("counter");

    total = 0;
    value1 = parseInt(val1.value);
    value2 = parseInt(val2.value);
    
val1.addEventListener("keydown", function(event) {
        value1 = parseInt(val1.value);
        // console.log(value1)
})

val1.addEventListener("focusout", function(event) {
    value1 = parseInt(val1.value);
    // console.log(value1)
})

val2.addEventListener("keydown", function(event) {
        value2 = parseInt(val2.value);
        // console.log(value2)
})

val2.addEventListener("focusout", function(event) {
    value2 = parseInt(val2.value);
    // console.log(value2)
})

add.addEventListener("click", (e)=>{
    total = addThis(value1, value2);
    console.log(total);
    display_Counter.innerHTML = total;
})

subtract.addEventListener("click", (e)=>{
    total = subtractThis(value1, value2)
    console.log(total)
    display_Counter.innerHTML = total;
})

divide.addEventListener("click", (e)=>{
    total = divideThis(value1, value2)
    console.log(total)
    display_Counter.innerHTML = total;
})

multiply.addEventListener("click", (e)=>{
    total = multiplyThis(value1, value2)
    console.log(total)
    display_Counter.innerHTML = total;
    })
});


// console.log(mathPacket.addThis(3,5))
// console.log(mathPacket.subtractThis(3,5))
// console.log(mathPacket.multiplyThis(3,5))
// console.log(mathPacket.divideThis(3,5))

