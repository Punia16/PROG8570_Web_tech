//alert('file linked!');
/*
    The function formSubmit() is called when the form "myForm" is submitted.
    It should run some validations and show the output.
*/
function formSubmit(){
    //alert('function works');
    
    // fetch all the values
    var formUserName        = document.getElementById('username').value;
    //alert(formName);
    var formEmail       = document.getElementById('email').value;
    var formPassword    = document.getElementById('password').value;
    var formCardNumber  = document.getElementById('cardNumber').value;
    var formPostcode    = document.getElementById('postcode').value;
    var formTickets     = document.getElementById('tickets').value;
    var formCampus      = document.getElementById('campus').value;
    var errors = ''; // to store all the errors and output at the end
    
    // get lunch 
    var lunchArray = document.getElementsByName('lunch'); // returns an array of all the fields with name as 'lunch'
    //console.log(lunchArray);
    var lunch = '';
    for(var lunchItem of lunchArray)
    {
        if(lunchItem.checked) // if user checked this radio button
        {
            //alert(lunchItem.id); // just to see which radio was checked
            lunch = lunchItem.value; // fetch the value from checked radio and store in lunch
        }
    }
    console.log('Lunch = ' + lunch);
    // validate
   
    if(!lunch) // validate lunch
    {
        errors += 'Please select a value for lunch <br>';
    }
    // false == 0 == '' : all of these are false
    
    var postcodeRegex = /^[A-Za-z][0123456789][A-Za-z]\s[0-9][A-Za-z][0-9]$/;
    if(!postcodeRegex.test(formPostcode))
    {
        // concatenate error to error output
        errors += 'Postcode should be in the format A2A 2A2 <br>';
    }

    // add other validations here as needed for practice

    // Calculations and output

    if(errors) // checks if errors is not empty
    {   
        // show the errors
        document.getElementById('errors').innerHTML = errors;
        // clear the output 
        document.getElementById('formResult').innerHTML = '';
    }
    else
    {
        // clear errors
        document.getElementById('errors').innerHTML = '';
        // do the calculations and show output
        var myOutput = 'Thank you! <br>';
        // calculations
        const TICKETPRICE = 10;
        var totalPrice = parseInt(formTickets) * TICKETPRICE;
        var tax = 13 * totalPrice / 100;
        var finalTotal = totalPrice + tax;
        // asfdasfd@laksjflsaf.sdf   [a-zA-z0-9\.]{1,50}[\@][a-zA-z0-9\-]{1,60}[\.][a-zA-z]{2,3} // not very comprehensive regex for emails
        myOutput += `
                Name         : ${formName} <br>
                Email        : ${formEmail} <br>
                Card Number  : ${formCardNumber} <br>
                Postcode     : ${formPostcode} <br>
                Campus       : ${formCampus} <br>
                Tickets      : ${formTickets} <br>
                Tickets cost : $${totalPrice.toFixed(2)} <br>
                Tax          : $${tax.toFixed(2)} <br>
                Total Cost   : $${finalTotal.toFixed(2)}
        `;

        document.getElementById('formResult').innerHTML = myOutput;
    }

    // Return false will stop the form from submitting and keep it on the current page.
    return false;
}