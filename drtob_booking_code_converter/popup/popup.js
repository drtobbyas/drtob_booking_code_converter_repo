
console.log('booking_code_converter is here');

document.addEventListener("DOMContentLoaded", submitListener);


function submitListener()
{
	//var infoText = document.getElementById("info");
	//TODO:change color of #info per error#a71111ce...
	//FIXME: restructure global variables 


	form.addEventListener("submit", function()
	{
		console.log("listening");
		if (form.srcBookMaker.value == "")
		{
			//TODO: alert user of no input
			//infoText.setAttribute("style", "color: #a71111ce; backgroundColor:#c99f18e3;");
			//infoText.innerHTML('You must select bookmaker to convert from');
			form.srcBookMaker.focus();
		}
		else if (form.srcBooking.value == "")
		{
			//TODO: alert user of no input
			//infoText.setAttribute("style", "color: #a71111ce; backgroundColor:#c99f18e3;");
			//infoText.innerHTML('You must input booking Code to convert');
			form.srcBooking.focus();
		}
		else if (form.dstBookMaker.value == "")
		{
			//TODO: alert user of no input
			//infoText.setAttribute("style", "color: #a71111ce; backgroundColor:#c99f18e3;");
			//infoText.innerHTML('You must select bookmaker to convert to')
			form.dstBookMaker.focus();
		}
		else

		{  
			console.log("data provided");
				var data = {};

				data.srcBookMaker = form.srcBookMaker.value;
				data.srcBooking = form.srcBooking.value;
			    data.dstBookMaker = form.dstBookMaker.value;
				data.dstBooking = form.dstBooking.value;

				console.log(data);
				//TODO: create boilerplate page to perform operation
				//FIXME: load a page packaged with extension starting at extension base/to/.html
				/* 
				browser.tabs.create({
					url: "https://shop.bet9ja.com"
				}).then( tab => {
					browser.runtime.sendMessage({info: "start", tab: tab.id, data});
				});
				*/
/* 
			//let sending = browser.runtime.sendMessage({data});
		   
			sending.then(() => {
				
				browser.tabs.create({
					url: "http://shop.bet9ja.com"
				});
			 },() => {
				 //TODO: message not send, notify user
				 console.log("data not sent sent");
			 } );
			

		}
		

	})
	
	*/


}
	});
}




		
		