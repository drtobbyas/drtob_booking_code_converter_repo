
/* 
document.body.style.border = "5px solid red";
document.body.style.border = "10px solid green";
infoAlert();
//$(document).ready(function(){infoAlert();});



function infoAlert(){
	// winObj = window.self;
	var alertDiv = document.createElement("div");
	var winWidth = document.body.clientWidth;
	$(alertDiv).css({"background-color": "blue", "color": "white", "font-size": "20px", "margin": "1px 0px","text-align": "left", "display": "block", "position":"fixed", "top": "0px", "left": "0px", "width": winWidth, "height": "50px", "border": "5px solid yellow", "padding": "15px 20px"});
	var alertStrong = document.createElement("strong");
	$(alertStrong).css({"font-size": "2em", "transform": "capitalise", "margin-left": "30px"});
	var mType = document.createTextNode("success:");
	alertStrong.appendChild(mType);
	alertDiv.appendChild(alertStrong);
	
	var alertMsgSpan = document.createElement("span");
	$(alertMsgSpan).css({"margin-left": "30px", "color": "white"});
	var mes = document.createTextNode("goodlfdfldlfdl")
	alertMsgSpan.appendChild(mes);
	
	alertDiv.appendChild(alertMsgSpan);
	var closeBtnSpan = document.createElement("span");
	$(closeBtnSpan).css({"float": "right","font-size": "30px", "font-weight": "bold", "margin": "0px 10px", "text-align": "center", "color": "white", "cursor": "pointer", "transition": "0.3s" })
	//$(closeBtnSpan).attr("id", "cancBtn");
	$(closeBtnSpan).hover(function(){$(this).css({"color": "black", "font-weight": "bold"});});
	//$('#cancBtn :hover').css({"color": "black", "font-weight": "bold"});
	var btn = document.createTextNode("\xD7");
	closeBtnSpan.appendChild(btn);
	alertDiv.appendChild(closeBtnSpan);
	
	//$(alertSpan).css({"position": "relative", "text-align": "center"});
	
	
	
	//alertDiv.appendChild(mes);
	//alertStrong.appendChild(mType);
	//alertSpan.appendChild(alertStrong);
	//alertSpan.appendChild(mes);
	//alertDiv.appendChild(alertSpan);
	
	//alertDiv.style.border = "5px solid yellow";
	//alertDic
	document.body.appendChild(alertDiv);
	
	
}
*/