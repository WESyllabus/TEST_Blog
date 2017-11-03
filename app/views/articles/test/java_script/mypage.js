function onClickSignin(){
	var str1=new RegExp("^[a-zA-Z]+$");
	if(!str1.test(document.forms[0].username.value)){
		alert("Username can only be alphabet!");
		document.forms[0].username.focus();
		return false;
	}
	var str=document.forms[0].password.value
	if(str.length<6){
		alert('Length of password is shorter than six.');
		return false;
	}
	document.forms[0].action="table.html"
}