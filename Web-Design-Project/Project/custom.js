	
	//xmlHttp object creation
	function myFun(){
	var xmlHttp;
	try     // Firefox, Opera 8.0+, Safari
	{
		xmlHttp=new XMLHttpRequest();
		return xmlHttp;
	}
	catch (e)
	{
		try  // Internet Explorer
		{
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
			return xmlHttp;
		}
		catch (e)
		{
			try
			{
				xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
				return xmlHttp;
			}
			catch (e)
			{
				alert("Your browser does not support AJAX!");
				return false;
			}
		}
	}
	}
	
	//End of object creation
	
	  $(function() {
    var category = [
      "Superman",
      "Spiderman",
      "Batman",
      "Texture",
      "ComplexTiles",
      "Manchester",
      "Canvas",
      "Cartoon",
      "Hollywood",
      "Characters",
      "Flip on",
      "Arsenal",
      "Minions",
	  "Tom and Jerry",
	  "Messi",
	  "Dancers Choice",
	  "Chelsea",
	  "Superhero",
	  "Sports",
	  "Hulk"
    ];
    $( "#autocomplete" ).autocomplete({
      source: category
    });
  });
	
	//Radio button click event
	
	$(".radio-inline input").click(function(){
	var xmlHttp = myFun();
var x = $(this).val();

xmlHttp.open("GET","images.jsp?q=" + x ,true);
xmlHttp.send();
xmlHttp.onreadystatechange=function()
	{
		
		if(xmlHttp.readyState==4)
		{
			var s1 = xmlHttp.responseText;
			
			var s2 = s1.split(";");
			var arr1 = s2[0].split(",");
			var arr2 = s2[1].split(",");
			for(var i = 1;i<5;i++){
				var d = document.getElementById("a" + i);

				$(d).next().children().eq(0).children().eq(0).text(arr2[i-1]);
				d.src = arr1[i-1];
			}
			
		}
	
	}

		});
		
		//End of Radio Button click event
		
		//Start of search
		
		$("#button").click(function(){
	var xmlHttp = myFun();
var x = $("#autocomplete").val();

xmlHttp.open("GET","images.jsp?q=" + x ,true);
xmlHttp.send();
xmlHttp.onreadystatechange=function()
	{
		
		if(xmlHttp.readyState==4)
		{
			var s1 = xmlHttp.responseText;

			if(s1.trim() == "No Matches Found;"){
				$("#nosearch").show();
				$("#nosearch").text("*No Matches Found");
				$("#nosearch").css("color", "red");
				$("#nosearch").fadeOut(4000);
				location.assign("#main");
				
			}else{
				var s2 = s1.split(";");
			var arr1 = s2[0].split(",");
			var arr2 = s2[1].split(",");
					for(var i = 1;i<5;i++){
				var d = document.getElementById("a" + i);
				$(d).next().children().eq(0).children().eq(0).text(arr2[i-1]);
				d.src = arr1[i-1];
			}
			location.assign("#feature2");
			}

		}
	
	}
	
		});
		
		//End of Search
		
		
		//Change Add to cart button color on hover
		function myFunction1(that){
			$(that).css("background-color", "#fffe97");
		}
		function myFunction2(that){
			$(that).css("background-color", "#EC0055");
		}
		// End of Change Add to cart button color on hover
		
//Zoom in zoom out for image		
$(".az").mouseenter(function(){
	
	$(this).addClass("hover");
});
$(".az").click(function(){
	if($(this).attr("class") == "az hover"){
		$(this).addClass("click");
	}
	else{
		$(this).removeClass("click");
	}
	
});
$(".az").mouseleave(function(){
	
	$(this).removeClass("click");
	$(this).removeClass("hover");
});

//End of Zoom in zoom out for image

//Show hide map

$("#iframe+button").click(function(){
	if(($("#iframe").attr("src")) != "maps.html"){
		$("#iframe").attr("src" , "maps.html");
		$(this).text("Hide Map");
	}
	else{
		$(this).text("Locate Us");
		$("#iframe").attr("src" , "");
	}
});

//End of show hide map

//Add to click cart event
$(".aTC").click(function(){
	$(this).prev().prev().children(':first-child').show();
	$(this).prev().prev().children(':first-child').fadeOut(2000);
	var y = $("#cart_count").text();
	var x = parseInt(y);
	sessionStorage.setItem("count", x);
	if(isNaN(x)){
		x = 1;
		$("#cart_count").show();
	}else{
		x = x+1;
	}
	$("#cart_count").text(x);
	$("#cart_details").text("There are " + x + " items in the cart" );
});

//End of Add to click cart event

//Validate email for subscription
function validate(value){
	var xmlHttp = myFun();
	
	xmlHttp.open("GET","validation.jsp?q=" + value ,true);
xmlHttp.send();
xmlHttp.onreadystatechange=function()
	{
		
		if(xmlHttp.readyState==4)
		{
			var s1 = xmlHttp.responseText;
			var s1 = s1.trim();
			if(s1 == "false"){
				$("#validation").text("*Incorrect Email");
				$("#validation").css("color" , "red");
				$('#news').attr("class" , "btn disabled");
			}else{
				$("#validation").text("");
				$('#news').attr("class" , "btn");
			}
			
		}
	
	}
	
}

//End of Validate email for subscription

//Email validation message for focus and blur
function fun(){
	$("#validation").text("");
}
function fun1(value){
	if(value == ""){
		$("#validation").text("");
	}else{
		validate(value);;
	}
}
// End of Email validation message for focus and blur

//Start of navigation
$(".dropdown-menu li a").click(function(){
	var str = $(this).parent().parent().prev().text();
	var regEx = /[^\w]/g;
	str = (str.replace(regEx,'')).toUpperCase();

	$("#directory").text("HOME / " + str + " / " + $(this).text().toUpperCase());
});
//End of navigation

$("#prevent").submit(function(e){
var xmlHttp = myFun();	
xmlHttp.open("GET","email.jsp?q=" + ($("#input1").val()).trim() ,false);
xmlHttp.send();

	$("#input1").val("");
	location.assign("#prevent");
			
});

$("#submit").click(function(){

	var xmlHttp = myFun();	
	var x = $("#username").val();
	var y = $("#password").val();
	xmlHttp.open("GET","login.jsp?q=" + x + "&p=" +y,true);
xmlHttp.send();
	xmlHttp.onreadystatechange=function()
	{
		
		if(xmlHttp.readyState==4)
		{
			var s1 = xmlHttp.responseText;
			if(s1.trim() == "true"){
				$("#myModal").modal('hide');
				$("#user").text("Welcome Bhavesh");

			}else{
				$("#login").text("*Incorrect Username or Password");
				$("#login").css("color" , "red");
			}
			
		}
	
	}
});
$("#checkout").click(function(){
	var y = $("#cart_count").text();
	var x = parseInt(y);
	var z = $("#user").text().length;
	
	if(z == 0 && !isNaN(parseInt($("#cart_count").text()))){
		document.getElementById("close").click();
		document.getElementById("log").click();
		
	}else{
		if(isNaN(x)){
		$("#cart_details").text("Your Cart is Empty" );
	}
	else{
		$("#cart_details").text("Thank you for shopping!!");
		$("#cart_count").text("");
		$("#cart_count").hide();
	}
	}
	
	
	
});
$("#close").click(function(){
	var y = $("#cart_count").text();
	var x = parseInt(y);
	if(isNaN(x)){
		$("#cart_details").text("There are no items in the cart" );
	}

});
var undo = "";
$("#empty").click(function(){
	var y = $("#cart_count").text();
	var x = parseInt(y);
	undo = x;
	if(isNaN(x)){
		$("#cart_details").text("Your Cart is already Empty" );
	}else{
		$("#cart_details").text("Your cart has been cleared." );
		$("#undo").show();
		$("#checkout").hide();
	}

});
$("#undo").click(function(){
	$("#cart_details").text("There are " + undo + " items in the cart" );
	$("#undo").hide();
	$("#checkout").show();
});
$("#cart_details").text("There are no items in the cart" );

$("#sub").click(function(){
	var xmlHttp = myFun();	
	xmlHttp.open("GET","email.jsp?q=" + $("#email").val().trim() ,false);
	xmlHttp.send();
	$("#p1").show();
	
	$("#p1").fadeOut(3000);
	$("#name").val("");
	$("#email").val("");
});
$("#fb").mouseenter(function(){
	$(this).attr("src" , "Images/fb.png");
});
$("#fb").mouseleave(function(){
	$(this).attr("src" , "Images/fb1.png");
});
$("#tw").mouseenter(function(){
	$(this).attr("src" , "Images/tw.png");
});
$("#tw").mouseleave(function(){
	$(this).attr("src" , "Images/tw1.png");
});
$("#link").mouseenter(function(){
	$(this).attr("src" , "Images/link.png");
});
$("#link").mouseleave(function(){
	$(this).attr("src" , "Images/link1.png");
});
$("#insta").mouseenter(function(){
	$(this).attr("src" , "Images/insta.png");
});
$("#insta").mouseleave(function(){
	$(this).attr("src" , "Images/insta1.png");
});
$("#gplus").mouseenter(function(){
	$(this).attr("src" , "Images/gplus.png");
});
$("#gplus").mouseleave(function(){
	$(this).attr("src" , "Images/gplus1.png");
});
$("#pint").mouseenter(function(){
	$(this).attr("src" , "Images/pint.png");
});
$("#pint").mouseleave(function(){
	$(this).attr("src" , "Images/pint1.png");
});