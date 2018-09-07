document.body.style.border = "5px solid red";

/**fires getDat() when "DOMContenLoaded" is triggered, i.e document is loaded */
document.addEventListener("DOMContentLoaded", function()
{
	function handleMessage(message)
	{
		console.log(message);
		
		if (message["srcBooking"] != "")
		{
			var srcBooking = message["srcBooking"];
			start(srcBooking);

		}
		else
		{
			//TODO: srcBooking is null, notify user
		}
	}
	browser.runtime.onMessage.addListener(handleMessage);

});
console.log("executing downloadBet9ja.js");

/**returns a match of @param str  in @param elem */
/** 
function checkElementText(elem, str){
	
    var el = document.getElementById(elem)||
	document.getElementsByClassName(elem)||
	document.getElementsByTagName(elem);
	var theText = el.textContent ;
	var found = theText.match(str);
	
	if (found){
		return found;
	}
	return false;
	
	
}
*/
/** 
function onExist(){
	var notValid = checkElementText("s_w_PC_cCoupon_mexPrenotazione", /Please check the booking number/i);
	var expire =  checkElementText("s_w_PC_cCoupon_mexPrenotazione", /All matchs are expired/i);
	var someExpire = checkElementText("s_w_PC_cCoupon_mexPrenotazione", /The following matches are expired/i);
	console.log(notValid + expire + someExpire);
	if (notValid)
	{
		console.log('Error: $(notValid)');
		//TODO: notify user
	}
	else if (expire)
	{
		console.log("Error:" + expire);
		//TODO: notify user
	}
	else if (someExpire)
	{ 
		simulateClick("s_w_PC_cCoupon_lnkOkPrenotatore");
		thePromise = checkElementExist("CItems", 500);
		thePromise.then(function(){
			extractData("CItem te1");
		},function(error){console.log('Error:$(error)');});
		
	}	
	else
		{
		thePromise = checkElementExist("CItems", 300);
		thePromise.then(function(){
			//TODO: display notification to user "working; extracting data"
			extractData("CItem te1");
			//see();
			//infoAlert();
			
			
		},function(){
			
			console.log('can not find elem $(error)');
		});
		
	    }		

}
*/
//function see(){document.body.style.border = "30px solid green";}
/** create alert to notify user*/
/*
 function infoAlert(){
	
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

	$(closeBtnSpan).hover(function(){$(this).css({"color": "black", "font-weight": "bold"});});

	var btn = document.createTextNode("\xD7");
	closeBtnSpan.appendChild(btn);
	alertDiv.appendChild(closeBtnSpan);
	
	document.body.appendChild(alertDiv);
	
	
 }
*/

/**extract data from webPage, it extracts the content of element */
/** 
function extractData(elem){
	var el = document.getElementById(elem)||
	document.getElementsByClassName(elem)||
	document.getElementsByTagName(elem);
	allItems = [];
	for (i = 0; i < el.length; i++)
	{
		//IDEA: i have idea
		//FIXME: use vanilla javascript to access children element to extract from other than jquery
		var eachItem = el[i];
		var theItem = [];
		theItem.push($(eachItem).children('.CCodPub').text()); // code
		theItem.push($(eachItem).children('.CEvento').text()); // tournament
		theItem.push($(eachItem).children('.CSubEv').children('span').text()); // team name
		var opt =$(eachItem).find('.CSegno').contents().not($(eachItem).find('.CSegno').children());
	    theItem.push($(opt).text());// options
		theItem.push($(eachItem).find('.CSegno').children('.CqSegno').text()); // option type
		//console.log(theItem);
		allItems.push(theItem);
		
	}
	
	console.log(allItems);
}
*/

/**checks for a specified element @param elem in the html DOM, timeOut at @param timeOut*@param time */
/**
function checkElementExist(elem, time,timeOut)
{
	return new Promise(function(resolve, reject)
	{

		var exist = setInterval(function(){
    	var el = document.getElementById(elem)||
		document.getElementsByClassName(elem)||
		document.getElementsByTagName(elem);
		let count = 0;
		if (el != false)
		{
			console.log("elem exist");
			clearInterval(exist);
			resolve(el);
		
		}
		else
		{ 
			count++
	    	if (count == timeOut) 
	   		{
		    	console.log("can not find"+ elem + "after" + timeOut*time + "second");
		    	clearInterval(exist);

	    	}
 		}		
			
	},time);
	}
	);
}
*/
/**simulate a mouse click on an element @param elem */
/** 
function simulateClick(elem){
	var evt = new MouseEvent("click", {
	bubbles: true,
	cancelabe: true,
	view: window
	}
	);
	var obj = document.getElementById(elem);
	var clic = !obj.dispatchEvent(evt);
}
*/ 
/**Focuses the text box @param input and input @param booking   */
/**
function inputSrcBooking(input, booking){
	var el = document.getElementById(input)||
	document.getElementsByClassName(input)||
	document.getElementsByTagName(input);
	//TODO: first clear the input box, may be already filled, who knows
	el.value = booking;
	return;
	
}
 */

/** 
function start(bookingCode)
{
//srcBookMaker = item["srcBookMaker"];
//srcBooking = item["srcBooking"];
//dstBookMaker = item["dstBookMaker"];
console.log(bookingCode);
inputSrcBooking("s_w_PC_cCoupon_txtPrenotatore", bookingCode);
simulateClick("s_w_PC_cCoupon_lnkLoadPrenotazione");
promise = checkElementExist("s_w_PC_cCoupon_mexPrenotazione", 1000, 7);
promise.then(onExist,onError);
	

}

function onError(error){
	console.log('Error: $(error)');
}

*/


//let getting = browser.storage.local.get();
//getting.then(onGot,onError);



//var h = document.getElementById("header");
//h.addEventListener("click", checkInternet);


/*
function checkInternet(){
	return new Promise(function(resolve, reject){
		var xhr = new XMLHttpRequest();
		var file = "https://pastebin.com/raw/6g5189AL";
		var rand = Math.round(Math.random() * 10000);
		
		xhr.open("GET", file + "#" + rand, true);
		xhr.send();
	    xhr.addEventListener("readystatechange", processRequest, true);
	
		function processRequest(e)
		{
			if (xhr.readyState == 4)
			{
				if (xhr.status >= 200 && xhr.status < 304)
				{
					resolve("connectionExist");
					console.log(e);
				}
				else 
				{
					reject("NoConnection");
					console.log(e);
				}
				
			}
			
			
		}
		
	});
}
*/
