//alert('file linked!');
/*
    The function formSubmit() is called when the form "myForm" is submitted.
    It should run some validations and show the output.
*/
function formSubmit(){
    //alert('function works');
    
    // fetch all the values
    var formUserName        = document.getElementById('username').value;
    //alert(formUserName);
    var formEmail       = document.getElementById('email').value;
    var formPassword    = document.getElementById('password').value;
    var formCardNumber  = document.getElementById('cardNumber').value;
    var formExpiryMonth = document.getElementById('expiryMonth').value;
    var formExpiryYear  = document.getElementById('expiryYear').value;
    // var formTickets     = document.getElementById('tickets').value;
    // var formCampus      = document.getElementById('campus').value;
    var date = new Date();
    var someday = new Date();
   
    // get saveCard 
    var saveCardArray = document.getElementsByName('saveCard'); // returns an array of all the fields with name as 'lunch'
    //console.log(saveCardArray);
    var saveCard = '';
    for(var saveCardItem of saveCardArray)
    {
        if(saveCardItem.checked) // if user checked this radio button
        {
            //alert(saveCardItem.id); // just to see which radio was checked
            saveCard = saveCardItem.value; // fetch the value from checked radio and store in saveCard
        }
    }
    console.log('SaveCard = ' + saveCard);
    // validate
    var errors = ''; // to store all the errors and output at the end
    if(!saveCard) // validate saveCard
    {
        errors += 'Please select a value for saveCard <br>';
    }
    // false == 0 == '' : all of these are false

    //Fill in all fields
    if(formUserName == "" || formPassword == "" || isNaN(cardNumber.value) )
    {
        errors += 'Warning! All fields are mandatory to fill in <br>';
    }
    
    var postcodeRegex = /^[A-Za-z][0123456789][A-Za-z]\s[0-9][A-Za-z][0-9]$/;
    if(!postcodeRegex.test(formPostcode))
    {
        // concatenate error to error output
        errors += 'Postcode should be in the format A2A 2A2 <br>';
    }

    // card number validation
    var cardno = /^(?:3[47][0-9]{13})$/;
    if(!formCardNumber.match(cardno) || formCardNumber.length != 16)
    {
        errors += 'Not a valid Card number! <br>';
    }

    // Name field should not be emptied
    var letters = /^[A-Za-z]+$/;
    if(!formUserName.match(letters))
    {
        errors += 'Username must have alphabet characters only <br>';
    }

    //Email validation
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!formEmail.match(mailformat))
    {
        errors += 'Please provide valid email id <br>';
    }

    //Password validation
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    if(!formPassword.match(decimal))
    {
        errors += 'Password must be 8 to 15 characters containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character <br>';
    }

    //Card's month and year validation
    if(formExpiryMonth.selectedIndex == 0 || formExpiryYear.selectedIndex == 0)
    {
        errors += 'Please expiry month and year <br>';
    }

    someday.setFullYear(formExpiryYear, formExpiryMonth, 1);

    if (someday < date) 
    {
        errors += 'The expiry date is before todays date. Please select a valid expiry date <br>';
    }

    // someday.setFullYear(exYear, exMonth, 1);

    // if (someday < date) 
    // {
    //     errors += 'The expiry date is before todays date. Please select a valid expiry date <br>';
    // }
    
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
        var myOutput = 'Thank you for signing in! ${formUserName} <br>';
        // calculations
        // const TICKETPRICE = 10;
        // var totalPrice = parseInt(formTickets) * TICKETPRICE;
        // var tax = 13 * totalPrice / 100;
        // var finalTotal = totalPrice + tax;
        // asfdasfd@laksjflsaf.sdf   [a-zA-z0-9\.]{1,50}[\@][a-zA-z0-9\-]{1,60}[\.][a-zA-z]{2,3} // not very comprehensive regex for emails
        myOutput += `
                Name        : ${formUserName} <br>
                Email       : ${formEmail} <br>
                Card Number : ${formCardNumber} <br>
        `;

        // Campus      : ${formCampus} <br>
        // Tickets     : ${formTickets} <br>
        // Cost of tickets : $${totalPrice.toFixed(2)} <br>
        // Tax : $${tax.toFixed(2)} <br>
        // Total Cost : $${finalTotal.toFixed(2)}
        

        document.getElementById('formResult').innerHTML = myOutput;
    }

    // Return false will stop the form from submitting and keep it on the current page.
    return false;
}