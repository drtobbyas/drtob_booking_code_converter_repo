console.log("backgroung is here");
/** 



 async function loadDownloadPage(theSrcUrl)
{ 
    function onCreated()
    { 
        console.log("inside created tab");
        //FIXME code is executing in active tab, you can specify tab
        var executing = browser.tabs.executeScript(
        {
            
            file: "/scripts/downloadBet9ja.js"
            
        });

        console.log("executing downloadBet9ja.js");
        executing.then(function(){browser.runtime.sendMessage({srcBooking});},function(){console.log("can not execute downloadBetja.js")}); 
        //FIXME: send message to tab if runtime is not feasible

    }
    function onError(error){
        console.log('unable to execute downloadBet9ja.js: $(error)');

    }
    let tabHash = "#exqupdownloadpage";
    let hashedSrcUrl = theSrcUrl + tabHash;
    //TODO: you can create the page in background,so the the process is hidden from user
    srcWebPage = await browser.tabs.create({url: hashedSrcUrl});
    onCreated();
   
    //srcWebPage.then(onCreated, onError);

    //return;
}
function onGot(data)
{
    console.log("gotting result: " + data["srcBookMaker"]);
    switch (data["srcBookMaker"])
    {
        case "bet9ja":
        {

            srcUrl = "https://shop.bet9ja.com/Sport/OddsAsync.aspx?IDLingua=2";
            //IDEA: you can use shop or web, web is preferrable as it seems faster load
            
            break;
                   // srcWebPage = browser.tabs.create({url: srcUrl});
                    //IDEA: look for a way to send content script to srcWebPage
        }
        case "1960bet": 
        {
            srcUrl = "http://1960bet.com";
            loadDownloadPage(srcUrl);
            break;
                     //IDEA: look for a way to send content script to srcWebPage
        }
        case "sureBet247":
        {
            srcUrl = "http://surebet247.com";
            loadDownloadPage(srcUrl);
            break;
                     //IDEA: look for a way to send content script to srcWebPage
        }
    }
    loadDownloadPage(srcUrl);
}
function onError(error){
    console.log('unable to get stored data: $(error)');

}
*/

/*Listening for message */


/** Handles message recieved 
function handleMessage(message,sender,sendResponse)
{
    if (message.info == "start"){
        //TODO:create frame to load extract.js
        browser.tabs.executeScript(message.tab,{
            file: "/scripts/extract.js"
        });

    }
    */
    /* 
    console.log(message);
    console.log(message["srcBooking"]);
   var data = 
    {
        srcBookMaker: message["srcBookMaker"],
        srcBooking: message["srcBooking"],
        dstBookMaker: message["dstBookMaker"],
        dstBooking: message["dstBooking"]
    }

    onGot(data);
   // storeMessage(message).then(onGot);
*/


    //sendResponse({response});


        //return baar();

        //console.log(srcBookMaker);    
        //FIXME: attach a .then of onGot to message recieved

        //onGot(message);

        //retrieve data from local storage
        //var getting = browser.storage.local.get();      //getting.then(onGot, onError); 
    
//}

//browser.runtime.onMessage.addListener(handleMessage);


//getting.then(onGot, onError);