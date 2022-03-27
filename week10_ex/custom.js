// alert('It works!'); // check if the linking worked

var a = 0;
var b = 0;
var sum = 0;

// input and validate A
function enterA()
{
    a = prompt('Enter A:');
    // validate
    a = a.trim(); // removes all spaces in the front and back
    while(isNaN(a) || a === '' || a === null) // if true, then we know a is string and not number
    {
        //alert('You entered' + a + 'which is not a number.');
        a = prompt('Please enter numbers only, enter A:'); // ask the user again for input
    }
    a = parseInt(a); // converts the string to number but do not use it for strings like name
    document.getElementById('valA').innerHTML = a; // write a in its placeholder
}

// input and validate B
function enterB()
{
    //b = prompt('Enter B:');
    // validate
     // if true, then we know a is string and not number

    do{
        b = prompt('Please enter numbers only, enter B:'); // ask the user for input
    }while(isNaN(b) || b === '' || b === null);

    b = parseInt(b); // converts the string to number but do not use it for strings like name
    document.getElementById('valB').innerHTML = b; // write B in its placeholder
    document.getElementById('sumButton').innerHTML = `<button onclick="sumUp()">Sum Up!</button>`;
}

// sum the values and output

function sumUp()
{
    sum = a + b;
    document.getElementById('valSum').innerHTML = sum;
}

