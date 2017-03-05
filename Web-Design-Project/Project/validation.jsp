<%@ page import="java.util.*" %>
<%
String mail = request.getParameter("q");
String Email_regex = "^[\\w-\\+]+(\\.[\\w-]+)*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
String s = "";

if(!(mail.matches(Email_regex))){
            s = "false";
        }
out.print(s);
%>