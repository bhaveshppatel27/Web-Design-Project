<%@ page import="java.util.*" %>
<%
String s1 = request.getParameter("q");
String s2 = request.getParameter("p");
	String uname = "bhavesh";
	String pass = "bhavesh";
	
	if(s1.equals(uname) && s2.equals(pass)){
		out.print("true");
	}else{
		out.print("false");
	}
	
%>