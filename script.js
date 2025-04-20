// write js code here if required
function getTime(){
	const time = new Date().toLocaleString();
	document.getElementById('timer').innerHTML = time;
}
getTime();
setInterval(getTime,100);