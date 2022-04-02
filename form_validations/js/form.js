// Latest one

function formSubmit()
{
    
    //alert('function works');
    
    // fetch all the values
    let formUserName        = document.getElementById('username').value;
    //alert(formUserName);
    var formEmail       = document.getElementById('email').value;
    var formPassword    = document.getElementById('password').value;
    var formCardumber   = document.getElementById('cardnumber').value;
    let formAddress     = document.getElementById('address').value;
    var formPostcode    = document.getElementById('postcode').value;
    var formExpiryMonth = document.getElementById('expiryMonth').value;
    var formExpiryYear  = document.getElementById('expiryYear').value;
    var formTickets     = document.getElementById('tickets').value;
    var formCampus      = document.getElementById('campus').value;
    var date = new Date();
    var someday = new Date();
    // to store all the errors and output at the end
    var errors = ''; 

    //Second form elements
    const itemList = document.getElementById('item-list')
    const cartQty = document.getElementById('cart-qty')
    const cartTotal = document.getElementById('cart-total')
    const addForm = document.getElementById('add-form')
    const itemName = document.getElementById('item-name')
    const itemPrice = document.getElementById('item-price')

    const cart = []

    // itemList.onclick = function(e)
    // {
    //     // console.log("Clicked")
    //     if(e.target && e.target.classList.contains('remove')){
    //         const name = e.target.dataset.name
    //         removeItem(name, 1)
    //     } else if(e.target && e.target.classList.contains('add')){
    //         const name = e.target.dataset.name
    //         addItem(name)
    //     }
    // }

    // addForm.onsubmit = function(e)
    // {
    //     e.preventDefault()
    //     // console.log(e)
    //     const name = itemName.value
    //     const price = itemPrice.value
    //     addItem(name, price)

    // }
    
    // const name = itemName.value
    // const price = itemPrice.value
    // addItem(name, price)

    //Fill in all fields validation
    if(formUserName == "" || formEmail == "" || formPassword == " " || formCardumber == "")
    {
     errors += 'Warning! All fields are mandatory to fill <br>';
    }
    else
    {
        // Name field validation
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

        // Post code validation
        var postcodeRegex = /^[A-Za-z][0123456789][A-Za-z]\s[0-9][A-Za-z][0-9]$/;
        if(formPostcode == "" || !postcodeRegex.test(formPostcode))
        {
            errors += 'Fill Postcode with specified format A2A 2A2 <br>';
        }

        // Encrypting card detail
        var encrptedCardDetail = formCardumber.replace(/.(?=.{4})/g, '*');

        // card number validation
        var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
        if(!formCardumber.match(cardno) || formCardumber.length != 16)
        {
            errors += 'Enter 16-digits card number starting with 4! <br>';
        }

        //Password validation
        var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
        if(!formPassword.match(decimal))
        {
            errors += 'Password must be 8 to 15 characters containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character <br>';
        }

        //Card's month and year validation
        if(formExpiryMonth.selectedIndex === 0 || formExpiryYear.selectedIndex === 0)
        {
            errors += 'Please expiry month and year <br>';
        }

        someday.setFullYear(formExpiryYear, formExpiryMonth, 1);

        if (someday < date) 
        {
            errors += 'Expiry date should not be before todays date. Please select a valid expiry date <br>';
        }
    }

        // Calculations and output

    if(errors) // checks if errors is not empty
    {   
        // show the errors
        document.getElementById('errors').innerHTML = errors;
        // clear the output 
        // document.getElementById(itemList).innerHTML = '';
        // document.getElementById(cartQty).innerHTML = '';
        // document.getElementById(cartTotal).innerHTML = '';

        //disableform('add-form')
        

    //     document.getElementsBySelector("add-form")[0].setAttribute("disabled", "disabled");
    //     document.getElementById(BUTTON_ID).disabled = true;
    // const addForm = document.getElementById('add-form')
        
    }
    else
    {
        // clear errors
        document.getElementById('errors').innerHTML = '';
        // do the calculations and show output
        //enableform('add-form')

        var formData=document.getElementById("formData");
        formData.style.display="block";

        var myForm=document.getElementById("myForm");
        myForm.style.display="none";
    }

    const calc=document.getElementById("calc");

    calc.onclick= function(e) {

        //var count_p=document.getElementById("count_p").value;
        var error=document.getElementById("error");

        e.preventDefault()
        const name = itemName.value
        const price = itemPrice.value

        if (name == "" || price == "")
        {

            error.innerHTML="Please enter item!!";

        }

        else
        {

            itemList.onclick = function(e)
            {
                // console.log("Clicked")
                if(e.target && e.target.classList.contains('remove')){
                    const name = e.target.dataset.name
                    removeItem(name, 1)
                } else if(e.target && e.target.classList.contains('add')){
                    const name = e.target.dataset.name
                    addItem(name)
                }
            }

            addItem(name, price)


            // var total=parseInt(price)*parseInt(count_p)

            

            // var donate=(total/100)*10;

            // if(total<100){

            //     donate=10

            // }

            //var bill="<h1><center>Name: "+name.value+"<br>Email: "+email.value+"<br> Credit Card: xxxx-xxxx-xxxx-"+credita[3]+"<br>Total bill: "+total+"<br>Donation: "+donate;

            //document.write(bill);

        }

    }

        // addForm.onsubmit = function(e)
        // {
        // e.preventDefault()
        // // console.log(e)
        // const name = itemName.value
        // const price = itemPrice.value
        // addItem(name, price)

        // }

        // itemList.onclick = function(e)
        // {
        // // console.log("Clicked")
        //     if(e.target && e.target.classList.contains('remove')){
        //         const name = e.target.dataset.name
        //         removeItem(name, 1)
        //     } else if(e.target && e.target.classList.contains('add')){
        //         const name = e.target.dataset.name
        //         addItem(name)
        //     }
        // }

        // var myOutput =`Receipt !`
        // myOutput += `<h1><center>Thank You ${formUserName} for shopping! <br>` ;
        // // calculations
        // const TICKETPRICE = 10;
        // var totalPrice = parseInt(formTickets) * TICKETPRICE;
        // var tax = 13 * totalPrice / 100;
        // var finalTotal = totalPrice + tax;
        // // asfdasfd@laksjflsaf.sdf   [a-zA-z0-9\.]{1,50}[\@][a-zA-z0-9\-]{1,60}[\.][a-zA-z]{2,3} // not very comprehensive regex for emails
        // myOutput += `
        //     <h1><center>    
        //         Name        : ${formUserName} <br>
        //         Email       : ${formEmail} <br>
        //         Card detail : ${encrptedCardDetail} <br>
        //         MMM/YYYY    : ${formExpiryMonth}/${formExpiryYear} <br>
        //         Address     : ${formAddress} <br>
        //         Postcode    : ${formPostcode} <br>
        //         Campus      : ${formCampus} <br>
        //         Tickets     : ${formTickets} <br>
        //         Cost of tickets : $${totalPrice.toFixed(2)} <br>
        //         Tax : $${tax.toFixed(2)} <br>
        //         Total Cost : $${finalTotal.toFixed(2)}
        // `;
        // printDiv('formResult')
        //document.write(myOutput);
        // document.getElementById('formResult').innerHTML = myOutput;

    //} else end here

    // Return false will stop the form from submitting and keep it on the current page.
    return false;


    //Print receipt
    function printDiv() 
    {
        var print_div = document.getElementById("myForm").innerHTML;
        var print_area = window.open();
        print_area.document.write(myOutput);
        print_area.document.close();
        print_area.focus();
        print_area.print();
        print_area.close();
        
    }

    //Enable and disable item form
    function disableform(formId) {
        var f = document.forms[formId].getElementsByTagName('input');
        for (var i=0;i<f.length;i++)
            f[i].disabled=true
        var f = document.forms[0].getElementsByTagName('textarea');
        for (var i=0;i<f.length;i++)
            f[i].disabled=true
     }
   
       function enableform(formId) {
          var f = document.forms[formId].getElementsByTagName('input');
          for (var i=0;i<f.length;i++)
              f[i].disabled=false
          var f = document.forms[0].getElementsByTagName('textarea');
          for (var i=0;i<f.length;i++)
              f[i].disabled=false
       }


    // To add item
    function addItem(name, price) 
    {
        for(let i = 0; i < cart.length; i +=1)
        {
            if(cart[i].name === name)
            {
                cart[i].qty += 1
                showItems()
                return
            }
        }

        //const item = { name: name, price: price, qty: 1}
        
        const item = { name, price, qty: 1} // This means the same as above
        cart.push(item)

        showItems()
    }

    // To display cart items
    function showItems()
    {
        let output =`Receipt !`
        const qty = getQty()
        // console.log(`You have ${qty} items in your cart`)
        //cartQty.innerHTML = `You have ${qty} items in your cart`
        output += `You have ${qty} items in your cart`

        let itemStr = ''
        for(let i = 0; i < cart.length; i +=1)
        {
            // console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
            const name = cart[i].name
            const price = cart[i].price
            const qty = cart[i].qty

            // can use above or below code both are same meaning

            // const { name, price, qty } = cart[i]
            // itemStr += `
            //     <li> 
            //     ${name} 
            //     $${price} x ${qty} = 
            //     ${(qty * price).toFixed(2)}
            //     <button class="add" data-name="${name}"> + </button>
            //     <button class="remove" data-name="${name}"> - </button>
            //     </li>`

            itemStr += `
            <li><center> 
                ${name} 
                 $${price} x ${qty} = 
                 ${(qty * price).toFixed(2)}
                 <button class="add" data-name="${name}"> + </button>
                 <button class="remove" data-name="${name}"> - </button>
             </li>`
        }
        //itemList.innerHTML = itemStr
        output += itemStr

        const total = getTotal()
        // console.log(`Total in cart:- $${total}`)
        //cartTotal.innerHTML = `Total in cart:- $${total}`
        output += `Total in cart:- $${total}`

        // Make donation
        let donate=''
        if(total < 100){
            donate = 10
            //cartTotal.innerHTML = `Donation for a cause:- $${donate}`
            output += `Donation for a cause:- $${donate}`
        }
        else{
            donate = parseInt(total) * 0.1
            //cartTotal.innerHTML = `Donation for a cause:- $${donate}`
            output += `Donation for a cause:- $${donate}`
        }

        output += `
            <h1><center>    
                Name        : ${formUserName} <br>
                Email       : ${formEmail} <br>
                Card detail : ${encrptedCardDetail} <br>
                MMM/YYYY    : ${formExpiryMonth}/${formExpiryYear} <br>
                Address     : ${formAddress} <br>
                Postcode    : ${formPostcode} <br>
               
        `;
        // printDiv('formResult')
        document.write(output);
        
    }

    // To get the quantity
    function getQty()
    {
        let qty = 0;
        for(let i = 0; i < cart.length; i +=1)
        {
            qty += cart[i].qty
        }
        return qty
    }

    // To get the total
    function getTotal()
    {
        let total = 0
        for(let i = 0; i < cart.length; i +=1)
        {
            total = cart[i].price * cart[i].qty
            console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
        }
        return total.toFixed(2)
    }

    // To remove the item
    function removeItem(name, qty = 0)
    {
        for(let i = 0; i < cart.length; i +=1)
        {
            if(cart[i].name === name)
            {
                if(qty > 0)
                {
                    cart[i].qty -= qty
                }
                
                if(cart[i].qty < 1 || qty === 0)
                {
                cart.splice(i, 1)
                }
                showItems()
                return
            }
        }

    }

}