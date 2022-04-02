// Parwinder Singh
// Student ID - 8798669

function formSubmit(){

    // Getting form variables values
    let error=document.getElementById("error");
    let name=document.getElementById("name");
    let email=document.getElementById("email");
    let password=document.getElementById("password");
    let credit=document.getElementById("credit");
    let month=document.getElementById("expiryMonth");
    let year=document.getElementById("expiryYear");
    let art=document.getElementById("art");
    let form=document.getElementById("form");
    let display=document.getElementById("display");

    // display.innerHTML='<li>Hello world</li>'

    let check=true;

    //Initialising cart array
    const cart = []

    // Card spliting on hypen for validation
    credit=credit.value;
    newCredit=credit.split("-");

    for(i=0;i<newCredit.length;i++){
        if (!isNaN(newCredit[i])) 
        {

        }else 
        {
            check = false
            break;
        }
    }

    //Fields validation
    var letters = /^[A-Za-z]+$/;
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var cardno = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    var checkCondition = true;

    // Expiry Month and Year validation
    if(month.selectedIndex === 0|| year.selectedIndex === 0){
        error.innerHTML="Please select expiry month and year";
        error.style.display="block";
        checkCondition = false;
    }
    // card number validation
    if(credit.length<19 || credit.length>19)
    {
        error.innerHTML="Please enter valid credit card number";
        error.style.display="block";
        checkCondition = false;
    }
    //Password validation
    var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
    var valPassword = password.value;
    if(!valPassword.match(decimal))
    {
        error.innerHTML="Password must be 8 to 15 characters containing at least one lowercase letter, one uppercase letter, one numeric digit, and one special character";
        error.style.display="block";
        checkCondition = false;
    }
     //Email validation
     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     var valEmail = email.value;
     if (!valEmail.match(mailformat))
     {
         error.innerHTML="Please provide valid email id ";
         error.style.display="block";
         checkCondition = false;
     }
    // Name field validation
    var valName= name.value;
    if (!valName.match(letters)){
        error.innerHTML="Username must have alphabet characters only";
        error.style.display="block";
        checkCondition = false;
    }
    // Empty fields validation
    if (name.value=="" || password.value=="" || email.value=="" || credit.value=="" ){
        error.innerHTML="Warning! All fields are mandatory to fill";
        error.style.display="block";
        checkCondition = false;
    }
    if(checkCondition == true)
    {
        art.style.display="block";
        form.style.display="none";
    }

    // Getting buttons' id
    var b1=document.getElementById("b1");
    var b2=document.getElementById("b2");
    var b3=document.getElementById("b3");
    var b4=document.getElementById("b4");

    // Handle add item
    b1.onclick = function(e){
        e.preventDefault()
        const price = 35
        addItem(price)
    }
    b2.onclick = function(e){
        e.preventDefault()
        const price = 55
        addItem(price)
    }
    b3.onclick = function(e){
        e.preventDefault()
        const price = 65
        addItem(price)
    }
    b4.onclick = function(e){
        e.preventDefault()
        const price = '70'
        addItem(price)
    }


   // To add item
   function addItem(price) 
   {
    var count=document.getElementById("count");
    count.style.display="block";
       for(let i = 0; i < cart.length; i +=1)
       {
           if(cart[i].price === price)
           {
               cart[i].qty += 1
               displayResult()
               return
           }
       }
        //const item = {price: price, qty: 1}
       const item = {price, qty: 1} // This means the same as above
       cart.push(item)

       displayResult()
   }

   //To show result in display div
   function displayResult()
   {
        const qty = getQty()
        let result=`You have ${qty} items in your cart`
        let itemStr = `
            <center> 
            <table>
            <tr><th>Price</th>
            <th>Qty</th>
            <th>Total</th></tr>
            </table>`
        
            for(let i = 0; i < cart.length; i +=1)
        {
            // console.log(`- $${cart[i].price} x ${cart[i].qty}`)
            const price = cart[i].price
            const qty = cart[i].qty
            itemStr += `
            <center> 
            <table>
            <tr><td>$${price}</th>
            <td>${qty}</td>
            <td>$${(qty * price).toFixed(2)}</td></tr>
                </table>`
        }
        result += itemStr
        const total = getTotal()
        // console.log(`Total in cart:- $${total}`)
        result += `<b>Total in cart:- $${total}</b>`
        display.innerHTML=result

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
        // itemList.innerHTML = itemStr
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
            total += cart[i].price * cart[i].qty
            console.log(`- $${cart[i].price} x ${cart[i].qty}`)
        }
        return total.toFixed(2)
    }

    var count=document.getElementById("count");
    count.style.display="block";

    var receipt=document.getElementById("receipt");

    // To display the receipt
    receipt.onclick= function(e) {
        e.preventDefault()
        let total = getTotal()
        let donate=''
        if (total < 0 || total=== "")
        {
            error.innerHTML="Please shop for items!!";
            // document.write(error.innerHTML="Please shop for items!!");
        }
        else
        getReceipt()
     }
    
    function getReceipt(){
        let total = parseInt(getTotal())
        let donate=''
        if(total < 100 )
            {
                donate=10
            }else{
                donate = total * 0.1;
            }
            
            var output = `
        <h1><center>  Receipt :- <br>
        <br><br>
        <border>
        <table><tr>
            <th>Name : </th>
            <td>${name.value}</td>
            </tr>
            <tr>
            <th>Email : </th>
            <td>${name.value}</td>
            </tr>
            <tr>
            <th>Card detail : </th>
            <td>xxxx-xxxx-xxxx-${newCredit[3]}</td>
            </tr>
            <tr>
            <th>Shopping total : </th>
            <td>$${total}</td>
            </tr>
            <tr>
            <th>Donation : </th>
            <td>$${donate}</td>
            </tr>
            <tr>
            <th>Total Bill : </th>
            <td>$${total + donate}</td>
            </tr>
           </table></border>
           `;

        // var bill="<h1><center>Name: "+name.value+"<br>Email: "+email.value+"<br> Credit Card: xxxx-xxxx-xxxx-"+newCredit[3]+"<br>Total bill: "+total+"<br>Donation: "+donate;
        
        // Printing details on next page
        document.write(output);
        
    }

    return false;

}