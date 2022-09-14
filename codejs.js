	
	if (sessionStorage.getItem("color") == null)
	{
		sessionStorage.setItem("color", "#1d5972");
	
	}
	document.bgColor  = sessionStorage.getItem ("color");
	
	
	
	function validate(ele)
	{
		var valid = true ;
		if (checkfname(ele) == false)
		{
			valid = false;
		}
		if(checklname(ele)== false)
		{
			valid = false;
			
		}
		if(checkemail(ele)== false)
		{
			valid = false;
		}
		if(checkphone(ele) == false)
		{
			valid = false;
		}
		if(checkpass(ele) == false)
		{
			valid = false ;
		}
		if (valid == 	true)
		{
			alert ("sign up succesful ");
			window.location.href = 'home/homepage.html';
		}
	
	}
	function checkfname(form)
	{
		var name = form.firstname.value;
		if(name == ''){
			alert("first name empty !")
			form.firstname.focus();
			return false ;
		}
		return true ;
	}
	function checklname(form)
	{
		var name = form.lastname.value;
		if(name == ''){
			alert("last name empty !")
			var name = form.lastname.focus();
			return false ;	
			}
	return true ;	
	}		
	function checkemail(form)
	{
		var  email = form . email .value ;
		if(email == '')
		{
			alert("email empty!");
			form . email .focus();
			return false ;
		}
		else if ((email.indexOf("@") == -1) || (email.indexOf('.') == -1))
		{
			alert("email not valid !");
			form . email .focus();
			return false ;
		}
		return true ;
	
	}
	function checkphone(form)
	{
		var phone = form.phonenum.value ;
		console.log(phone.length);
		if (phone.length != 11)
		{
			alert("phone number must be 11 digit");
			form . phonenum .focus();
			return false ;
		}
		else if (phone.length == 11)
		{
			if (phone[0] == '0' && phone[1] == '1')
			{
				return true ;
			}
			else 
			{
				alert("phone number must start by 01 ")
				form . phonenum .focus();
				return false ;
			}
		}
		return true ;
	
	}
	function checkpass (form)
	{
		var pass1 = form.pass1.value ;
		var pass2 = form.pass2.value ;
		
		if (pass1 != pass2)
		{
			alert("password don't identecal");
			form.pass1.focus();
			return false ;
		}
		else if ( pass1 == '' || pass2 == '')
		{
			alert ("password 1 or 2 is empty");
			form.pass1.focus();
			return false ;
		}
		else if ((pass1 == pass2) && (pass1.length < 6 )) {
			alert ("password must be 6 digits or more");
			return false ;
		}
		return true ;
	
	}
	
	function chcolor(color)
	{
		document.bgColor  = color;
		if (sessionStorage.getItem("color") != null)  {
			sessionStorage.removeItem("color");
			sessionStorage.setItem("color", color);
		}else{
			sessionStorage.setItem("color", color);
	}
	
	}
	function changeHeadingBg(color){
		document.getElementById("heading").style.background = color;
		document.getElementById("heading2").style.background = color;
		document.getElementById("heading3").style.background = color;
		document.getElementById("heading4").style.background = color;
		document.getElementById("heading5").style.background = color;
		document.getElementById("heading6").style.background = color;
		document.getElementById("heading7").style.background = color;
		document.getElementById("heading8").style.background = color;
		document.getElementById("heading9").style.background = color;
		document.getElementById("heading10").style.background = color;
	}
	var array = ["mostafa@gmail.com", "magdy@gmail.com"];
	function logInvalidate(ele)
	{
		var emailCorrect = logIncheckemail(ele);
		var passCorrect = logIncheckpass(ele);
		
		if (emailCorrect && passCorrect) {
			var admin = isAdmin(ele.email.value);
			if (admin) {
				window.location.href = 'Admin page.html';
			}
			else{
				sessionStorage.setItem("name", "" );
				window.location.href = 'home/homepage.html';
			}
		}
	
	}
	function logIncheckemail(form)
	{
		var  email = form . email .value ;
		if(email == '')
		{
			alert("email empty!");
			form . email .focus();
			return false ;
		}
		else if ((email.indexOf("@") == -1) || (email.indexOf('.') == -1))
		{
			alert("email not valid !");
			form . email .focus();
			return false ;
		}
		return true ;
	
	}
	function logIncheckpass (form)
	{
		var pass1 = form.password.value ;
		if ( pass1 == '' )
		{
			alert ("password empty");
			form.password.focus();
			return false ;
		}
		else if (pass1.length < 6) {
			alert ("password must be 6 digits or more");
			return false ;
		}
		return true ;
		
	}
	function isAdmin(email) {
		var admin = false ;
		for (var i = 0 ; i < 2 ; i++) {
			if (array[i] == email) {
			admin = true ;}
		
		}
		return admin;
	}