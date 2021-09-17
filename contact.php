<!DOCTYPE html>
<html>
    <head>
        <script type = "text/javascript" 
        src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js">
     </script>

     <script src = "jquery.plug-in.js" type = "text/javascript"></script>
     <script src = "custom.js" type = "text/javascript"></script>
       <link rel="stylesheet" href="contact.css">
       <script src="validation.js"></script>
    </head>
     <body>
          <div class="container">
             <form action="dataload.php" method="post">
      
               <label for="fname">First Name</label>
               <input type="text" id="fname" class="fname" name="firstname" placeholder="Your name..">
               <span  id="fname_error_message"></span>
      
               <label for="lname">Last Name</label>
               <input type="text" id="lname" class="lname" name="lastname" placeholder="Your last name..">
               <span id="sname_error_message"></span>
      
               <label for="phone">phone number</label>
               <input type="text" id="phone" class="phone" name="contact" placeholder="Your number..">
               <span id="phone_error_message"></span>
            
               <label for="Email">Email</label>
               <input type="text" id="Email" name="Email" class="Email" placeholder="Your email..">
               <span  id="email_error_message"></span>
            
      
               <label for="subject">Subject</label>
               <textarea type ="text" id="subject" name="subject" class="subject" placeholder="Write something.." style="height:200px"></textarea>
               <span id="subject_error_message"></span>
               <div >
               <button type="submit"name="submit" class="submit" id="submit" value="Submit" style="width:70px;height: 30px;" >Submit !!</button>
</div>
               <!-- <a href="thankyou.php">submit</a>
                onclick="window.location='thankyou.php'";-->
               </form>
           </div>   
     </body>
 </html>
 