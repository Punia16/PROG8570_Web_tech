function submit(){

    
    var error=document.getElementById("error");
    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var credit=document.getElementById("credit");
    var month=document.getElementById("month");
    var year=document.getElementById("year");
    var check=true;
    credit=credit.value;
    credita=credit.split("-");

    for(i=0;i<credita.length;i++){
        if (!isNaN(credita[i])) 
        {

        }else 
        {
            check = false
            break;
        }
    }



    if (name.value=="" || email.value=="" || credit.value=="" || month.value=="" || year.value==""){

        error.innerHTML="Warning! All fields are mandatory to fill";

        error.style.display="block";

   

    }else if(credit.length<19 || credit.length>19){

        error.innerHTML="Please enter valid credit card number";

        error.style.display="block";

    }

    else{

        var okk=document.getElementById("okk");

        okk.style.display="block";

        var form=document.getElementById("form");

        form.style.display="none";

    }

    var b1=document.getElementById("b1");

    var b2=document.getElementById("b2");

    var b3=document.getElementById("b3");

    var b4=document.getElementById("b4");

    var b5=document.getElementById("b5");

    b1.addEventListener("click", button(50));

    b2.addEventListener("click", button(50));

    b3.addEventListener("click", button(50));

    b4.addEventListener("click", button(50));

    b5.addEventListener("click", button(50));

    function button(price){

        var count=document.getElementById("count");

        count.style.display="block";

        var calc=document.getElementById("calc");

        calc.onclick= function() {

            var count_p=document.getElementById("count_p").value;

            var error=document.getElementById("error");

            if (count_p<0 || count_p==""){

                error.innerHTML="Please enter valid number!!";

            }

            else{

                var total=parseInt(price)*parseInt(count_p)

                

                var donate=(total/100)*10;

                if(total<100){

                    donate=10

                }

                var bill="<h1><center>Name: "+name.value+"<br>Email: "+email.value+"<br> Credit Card: xxxx-xxxx-xxxx-"+credita[3]+"<br>Total bill: "+total+"<br>Donation: "+donate;

                document.write(bill);

            }

        }

    }
    return false;

}