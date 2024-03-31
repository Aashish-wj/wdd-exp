package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/gradeCalculator")
public class gradeCalculator extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    public gradeCalculator() {
        super();
    }
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.setContentType("text/html");
		PrintWriter out = null;
		try {
			out = response.getWriter();
			out.println("<h1>Grade Calculator</h1>");

			int m[] = new int[5];
			 m[0] = Integer.parseInt(request.getParameter("m1"));
			 m[1] = Integer.parseInt(request.getParameter("m2"));
			 m[2] = Integer.parseInt(request.getParameter("m3"));
			 m[3] = Integer.parseInt(request.getParameter("m4"));
			 m[4] = Integer.parseInt(request.getParameter("m5"));
			
			 for (int i=0;i<5;i++) {
				if (m[i] > 90 ){out.println("<p>Your grade for subject " + i + " is " + "O</p>");}
				else if (m[i] > 80 ){out.println("<p>Your grade for subject " + i + " is " + "A+</p>");}
				else if (m[i] > 70 ){out.println("<p>Your grade for subject " + i + " is " + "A</p>");}
				else if (m[i] > 60 ){out.println("<p>Your grade for subject " + i + " is " + "B+</p>");}
				else {out.println("Your grade for subject " + i + " is " + "B");}
			 }
			
		}
		catch(Exception e) {
			out.println("Error"+e.getMessage());
		}
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
