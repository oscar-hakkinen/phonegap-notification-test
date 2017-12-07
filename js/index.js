var notification_count=0;

$(document).on('pageinit', function() {

	$('#messageButton').on('click', function() {
		createMessage('Hello ther', 3000);
	});
	
	$('#dialogButton').on('click', function() {
		createDialog();
	});


	$('#notificationButton').on('click', function() {
		createNotification();
	});


});


function createMessage(text, time){		
	//phoneGap and jQueryMobile do not support toast messages directly
    //so we can add this using toast.js
   
    new Toast({content: text , duration: time}); 	
}
        	

function createDialog() {

	//phonegap supports native dialog boxes.
	//here's a simple example
      
	navigator.notification.confirm(
    	'Are you a very hunger?',  // message
        dialogDismissed,         // callback
        'Answer here',            // title
        ['Yes', 'NA']                  // buttons
    );

}
        	
        	
        	
function dialogDismissed(buttonIndex) {
	
	if(buttonIndex==1) {
        createMessage('you eat nao!', 3000); 
        createNotification();
        
        
    } else if(buttonIndex==2) createMessage('You work work no slackie', 3000);

}

   
   
function createNotification() {
        		
	//
    //generate a time to post notification
    //
    var currentTime = new Date().getTime(); //current time
    var notificationTime = new Date(currentTime + 3000); //delayed time  - add 1 second
    			
    //
    //setup notification
    //
    
    cordova.plugins.notification.local.schedule({ 
    	id: 		1,
        title: 		"Hey you Slackie",
        message: 	"member work work",
        date: 		notificationTime, 
        badge: 		notification_count++
   	});
    
}