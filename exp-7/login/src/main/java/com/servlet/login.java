package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.*;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/login")
public class login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = response.getWriter();
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con =DriverManager.getConnection("jdbc:mysql://localhost:3306/authentication", "root","kali07");
			String uname = request.getParameter("uname");
			String pwd = request.getParameter("pwd");
			PreparedStatement ps = con.prepareStatement("select uname from login where uname=? and pwd=?");
			ps.setString(1,uname);
			ps.setString(2, pwd);
			ResultSet rs= ps.executeQuery();
			if(rs.next()) {
				out.println("Login successfull <strong>"+uname+"</strong>");
				
			}
			else {
				out.println("Invalid username or password");
			}
		} catch (ClassNotFoundException e) {
			out.println(e);
		} catch (SQLException e) {
			out.println(e);
		}
		out.close();
	}

}
