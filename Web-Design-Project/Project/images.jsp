<%@ page import="java.util.*" %>
<%
String s = request.getParameter("q");
 String[] a = {"Images/cartoon1.jpg","Images/cartoon2.jpg","Images/cartoon3.jpg","Images/cartoon4.jpg","Images/texture1.jpg","Images/texture2.jpg","Images/texture3.jpg","Images/texture4.jpg","Images/sports1.jpg","Images/sports2.jpg","Images/sports3.jpg","Images/sports4.jpg","Images/superhero1.jpg","Images/superhero2.jpg","Images/superhero3.jpg","Images/superhero4.jpg"};
String[] c = {"Cartoon","Minions","Tom & Jerry1","Tom & Jerry2","Pink","Red","Blue Stars","Blue Lagoon","Arsenel","Chelsea","Manchester","Messi","Batman1","Batman2","Hulk","Superman"};

 String[] b= {"Images/cartoon111.jpg"};
 String temp1 = "";
 String temp2 = "";
int i = 0;
int j = 0;
if(s.equalsIgnoreCase("Cartoon") || s.equalsIgnoreCase("minions") || s.equalsIgnoreCase("Tom and Jerry")){
	i = 0;
	j = i+4;
}
else if(s.equalsIgnoreCase("texture") || s.equalsIgnoreCase("complextiles") || s.equalsIgnoreCase("canvas")){
	i=4;
	j=i+4;
}
else if(s.equalsIgnoreCase("sports") || s.equalsIgnoreCase("manchester") ||s.equalsIgnoreCase("chelsea") || s.equalsIgnoreCase("messi") || s.equalsIgnoreCase("arsenal")){
	i=8;
	j=i+4;
}
else if(s.equalsIgnoreCase("superhero") || s.equalsIgnoreCase("superman") || s.equalsIgnoreCase("spiderman") || s.equalsIgnoreCase("batman") || s.equalsIgnoreCase("hollywood") || s.equalsIgnoreCase("characters")|| s.equalsIgnoreCase("Hulk")){
	i=12;
	j=i+4;
}else{
	i = -1;
}
if(i == -1){
	out.print("No Matches Found");
}else{
	for(int k =i; k < j ;k++) {
   temp1 += a[k] + ",";
   temp2 += c[k] + ",";
}
}

out.print(temp1 + ";" + temp2);
%>