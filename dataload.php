<?php
$servername='localhost';
$username='root';
$password='';
$dbname = "detailsform";
$conn=mysqli_connect($servername,$username,$password,"$dbname");
if(!$conn){
   die('Could not Connect My Sql:' .mysql_error());
}

if(isset($_POST['submit']))
{	 
	 $first_name = $_POST['firstname'];
	 $last_name = $_POST['lastname'];
	 $email = $_POST['Email'];
	 $conatct = $_POST['contact'];
   $subject=$_POST['subject'];

	 $sql = "INSERT INTO details (fname,lname,email,phone,sub)
	 VALUES ('$first_name','$last_name','$email','$conatct','$subject')";
	 if (mysqli_query($conn, $sql)) {
		header("Location: thankyou.php");
	 } else {
		echo "Error: " . $sql . "
" . mysqli_error($conn);
	 }
	 mysqli_close($conn);
}
?>
