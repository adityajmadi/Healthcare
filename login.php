<style>
    body{ background-image: url('contact.jpg');
            background-position: fixed;
            background-repeat: no-repeat;
            background-size: cover;
        }
        .pp{font-size: 50px;
            text-align: center;
            font-family: Arial, Helvetica, sans-serif;
            color: black;}
            div{
                color: black;
            }
            table, th, td {
    border: 1px solid black;
    background-color: whitesmoke;
    text-align: center;
    width: 30%;
}
.a{
    font-size: 30px;
    text-align: center;
    color: black;
}
.div_a{
    color: black;
    text-align: left;
    align-content: left;
}
</style>
<?php
$con=mysqli_connect('localhost','root','','Health');
$_email=$_POST["email"];
$my_query = "SELECT email,weight,height,bmi,cal FROM Healthcare WHERE email='$_email'";
$rs = mysqli_query($con , $my_query);
if(mysqli_num_rows($rs)==1){
    while($rows = mysqli_fetch_assoc($rs)){
        $email_=$rows["email"];
        $weight=$rows["weight"];
        $height=$rows["height"];
        $bmi=$rows["bmi"];
        $cal=$rows["cal"];
    }
}
else{
    echo "Error: Calculate your BMI first";
}

?>
<div class="a">
<b> 
    Email: <?php echo "$email_";?><br>
    Weight: <?php echo "$weight";?><br>
    Height: <?php echo "$height";?> <br>
    BMI: <?php echo "$bmi";?> <br>
    Calories Intake: <?php echo "$cal";?> <br>
    <br></b>
</div>