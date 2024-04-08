<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<%= "<p>Username :" + request.getParameter("uname") +"</p>"%>
<%= request.getParameter("date") %>
<%= request.getParameter("email") %>
<%= request.getParameter("tel") %>
</body>
</html>