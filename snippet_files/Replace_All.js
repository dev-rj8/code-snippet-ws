<!DOCTYPE html>
<html><body>
<script>

var str = "A Hello, World! program is a computer program that outputs or displays Hello, World! to a user.";

//replace first occurance World with JS
str = str.replace("World", "JS");
document.write(str+"<br>");

//replace all Hello words with Hell
str = str.replace(/Hello/g, "Hell");
console.log(str);

document.write(str);

</script>
</body></html> 
