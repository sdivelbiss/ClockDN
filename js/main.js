function startTime (){
	today = new Date()
	var hours = today.getHours()
	var minutes = today.getMinutes()
	var seconds = today.getSeconds()

	
	 // if (18 < hours||hours > 5) {
  //      document.write("<link rel='stylesheet' href='../Clock/css/night.css' type='text/css'>");
  //     }
  //    if (18 < hours||hours > 5) {
  //    	document.write("<link rel='stylesheet' href='../Clock/css/day.css' type='text/css'>");
  //    }

     //-----------------------Adding a class wouldn't work - had to add new stylesheets -----------------------
	if (hours > 18 || hours < 5) {
	document.getElementById("clock").className = "";
	document.getElementById("clock").className = "clocknight";
	}
	else  {
	document.getElementById("clock").className = "";
	document.getElementById("clock").className = "clockday";
	}
	

	


	if (hours >= 13) {
		hours = hours - 12
	}

	
	


	minutes = checkTime(minutes)
	seconds = checkTime(seconds)

	document.getElementById("clock").innerHTML = hours + ":" + minutes + ":" + seconds;

 	setTimeout(function () {
        startTime()
    }, 1000)

	function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;

    
}
}
document.getElementById('clock').addEventListener('onload', startTime(), false)
