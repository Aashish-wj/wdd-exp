<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Login</title>
</head>
<body>
<form action ="login_validation" method="get">
<label for="uname" >Name :</label><br/>
<input type="text" name="uname" required autocomplete=true/><br/>
<label for="DOB">DOB :</label><br/>
<input type="date" name="date" required autocomplete=true/><br/>
<label for="email">Email :</label><br/>
<input type="email" name="email" required autocomplete=true/><br/>
<label for="tel">Telephone:</label><br/>
<input type="tel" name="tel" required autocomplete=true/><br/>
<input type="submit" value="submit"/>
</form>
</body>
</html>