  $(document).ready(function(){
        // set initially button state hidden
        $("#submit").hide();
        // use keyup event on email field
        //^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$
        $("#Email").keyup(function(){
            if(validateEmail()){
                // if the email is validated
                // set input email border green
                $("#Email").css("border","4px solid green");
                // and set label 
            //    $("#email_error_message").html("<p class='text-success'>E-mail Validated</p>");
            }else{
                // if the email is not validated
                // set border red
                
                $("#Email").css("border","4px solid red");
            //    $("#email_error_message").html("<p class='text-danger' >incorrect email</p>");
            
            }
            buttonState();
        });
    
        $("#fname").keyup(function(){
            if(validatename()){
                // if the email is validated
                // set input email border green
                $("#fname").css("border","4px solid green");
                // and set label 
             //   $("#fname_error_message").html("<p class='text-success'>Name Validated</p>");
            }else{
                // if the email is not validated
                // set border red
                $("#fname").css("border","4px solid red");
            //    $("#fname_error_message").html("<p class='text-danger'>incorrect Name</p>");
            }
            buttonState();
        });
        $("#lname").keyup(function(){
            if(validatename2()){
                // if the email is validated
                // set input email border green
                $("#lname").css("border","4px solid green");
                // and set label 
            //    $("#sname_error_message").html("<p class='text-success'>Name Validated</p>");
            }else{
                // if the email is not validated
                // set border red
                $("#lname").css("border","4px solid red");
             //   $("#sname_error_message").html("<p class='text-danger'>incorrect Name</p>");
            }
            buttonState();
        });
        $("#phone").keyup(function(){
            if(validatephone()){
                // if the email is validated
                // set input email border green
                $("#phone").css("border","4px solid green");
                // and set label 
            //    $("#phone_error_message").html("<p class='text-success'>phone Validated</p>");
            }else{
                // if the email is not validated
                // set border red
                $("#phone").css("border","4px solid red");
            //    $("#phone_error_message").html("<p class='text-danger'>incorrect phone no</p>");
            }
            buttonState();
        });
        
    

        $("#subject").keyup(function(){
            if(validatesubject()){
                // if the email is validated
                // set input email border green
                $("#subject").css("border","4px solid green");
                // and set label 
               // $("#subject_error_message").html("<p class='text-success'>address Validated</p>");
            }else{
                // if the email is not validated
                // set border red
                $("#subject").css("border","4px solid red");
              //  $("#subject_error_message").html("<p class='text-danger'>incorrect  Subject</p>");
            }
            buttonState();
        });
        
    });
    function buttonState(){
        if(validateEmail()  && validatename() && validatename2() && validatephone() && validatesubject()){
            // if the both email and password are validate
            // then button should show visible
            $("#submit").show();
        }else{
            // if both email and pasword are not validated
            // button state should hidden
            $("#submit").hide();
        }
    }
    function validateEmail(){
        // get value of input email
        var email=$("#Email").val();
        // use reular expression
         var reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
         if(reg.test(email)){
             return true;
         }else{
             return false;
         }
    }
    
    function validatename(){
        // get value of input email
        var name=$("#fname").val();
        // use reular expression
         var reg3 = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
         if(reg3.test(name)){
             return true;
         }else{
             return false;
         }
    }
    function validatename2(){
        // get value of input email
        var name=$("#lname").val();
        // use reular expression
         var reg3 = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
         if(reg3.test(name)){
             return true;
         }else{
             return false;
         }
    }
    function validatephone(){
        // get value of input email
        var phone=$("#phone").val();
        // use reular expression
         var reg4 = /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
         if(reg4.test(phone)){
             return true;
         }else{
             return false;
         }
    }
    function validatesubject(){
        // get value of input email
        var phone=$("#subject").val();
        // use reular expression
         var reg4 = /^[A-Za-z0-9.]{5,1000}$/;
         if(reg4.test(phone)){
             return true;
         }else{
             return false;
         }
    }
    var nextStep = document.querySelector('#nextStep');

    nextStep.addEventListener('click', function (e) {
      e.preventDefault();
      // Hide first view
      document.getElementById('my_form').style.display = 'none';
  
      // Show thank you message element
      document.getElementById('thank_you').style.display = 'block';
    });
    



