function initial(){
	var year=document.getElementById("year");
	year.innerHTML=""
	for(var i=0;i<year.childNodes.length;i++){
		year.removeChild(area.options[0]);
		year.remove(0);
		year.options[0]=null;
	}
	year.options.add(new Option("-",0));
	for(var i=2000;i<=2017;i++){
		year.options.add(new Option(i,i));
	}

	var type=document.getElementById("type");
	type.innerHTML=""
	for(var i=0;i<type.childNodes.length;i++){
		type.removeChild(area.options[0]);
		type.remove(0);
		type.options[0]=null;
	}
	type.options.add(new Option("-",0));
	var types=new Array('Philosophy','Social Sciences','Politics',
		'Military','Economics','Culture','Education','Sports','Language Literature',
		'Arts','History','Geography','Astronomy','Biology','Medical Hygiene',
		'Agriculture');
	for(var i=1;i<=16;i++){
		type.options.add(new Option(types[i-1]),i);
	}
}
function addRow(year, month, day, type){
	var bodyObj=document.getElementById("tbody");
	if(bodyObj==null){
		alert("Body of Table not Exist!")
		return;
	}
	var rowCount = bodyObj.rows.length;
	var cellCount = bodyObj.rows[0].cells.length;
	bodyObj.style.display="";
	var newRow=bodyObj.insertRow(rowCount++);
	newRow.insertCell(0).innerHTML=document.forms[0].bookname.value;
	newRow.insertCell(1).innerHTML=document.forms[0].author.value;
	newRow.insertCell(2).innerHTML=document.forms[0].price.value;
	newRow.insertCell(3).innerHTML=year+"."+month+"."+day;
	newRow.insertCell(4).innerHTML=type;
	newRow.insertCell(5).innerHTML=bodyObj.rows[0].cells[cellCount-1].innerHTML;
	bodyObj.rows[0].style.display="none";
}

function onClickAddBook(){
	var str1=new RegExp("^[a-zA-Z0-9\u4e00-\u9fa5]{1,}$");
	var str2=new RegExp("^[A-Z][a-zA-Z]+$");
	var str3=new RegExp("^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$");
	if(!str1.test(document.forms[0].bookname.value)){
		alert("Bookname error: you can only input alphabets,figures and Chinese characters");
		document.forms[0].bookname.focus();
		return;
	}
	if(!str2.test(document.forms[0].author.value)){
		alert("Author error: you can only input an English name");
		document.forms[0].author.focus();
		return;
	}
	if(!str3.test(document.forms[0].price.value)){
		alert("Price error: you can only input an float figures whose value is larger than zero");
		document.forms[0].price.focus();
		return;
	}
	if(year.value==0 || month.value==0 || day.value==0){
		alert("Please select a date!");
		year.focus();
		return;
	}
	if(type.value==0){
		alert("Please select a type");
		type.focus();
		return;
	}
	addRow(year.value,month.value,day.value, type.value);
}

function removeRow(inputobj){
	if(inputobj==null) return;
	var parentTD = inputobj.parentNode;
	var parentTR = parentTD.parentNode;
	var parentTBODY = parentTR.parentNode;
	parentTBODY.removeChild(parentTR);
}

function setMonth(){
	var month=document.getElementById("month");
	month.innerHTML=""
	for(var i=0;i<month.childNodes.length;i++){
		month.removeChild(area.options[0]);
		month.remove(0);
		month.options[0] = null;
	}
	month.options.add(new Option("-",0));
	for(var i=1;i<=12;i++){
		month.options.add(new Option(i,i));
	}
}

function setDay(){
	var year=document.getElementById("year").value;
	var month=document.getElementById("month").value;
	var day=document.getElementById("day");
	var data=new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	
	day.innerHTML=""
	for(var i=0;i<day.childNodes.length;i++){
		day.removeChild(area.options[0]);
		day.remove(0);
		day.options[0] = null;
	}
	day.options.add(new Option("-",0));
	for(var i=1;i<=data[month-1];i++){
		day.options.add(new Option(i,i));
	}
	if(((year%4==0&&year%100!=0)||year%400==0)&&month==2){
		day.options.add(new Option(29,29));
	}
}