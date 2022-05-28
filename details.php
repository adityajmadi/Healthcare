<?php
$con=mysqli_connect('localhost','root','','Health');
$_email=$_POST["email"];
$_weight=$_POST["weight"];
$_height=$_POST["height"];
$bmi=$_weight/ ($_height*$_height) *10000;
$cal = 13.5*$_weight+487;
$my_query="INSERT INTO Healthcare (email,weight,height,bmi,cal) VALUES ('$_email','$_weight','$_height','$bmi','$cal')";
$rs = mysqli_query($con , $my_query);
