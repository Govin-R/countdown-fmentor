
const countdown = document.getElementById('countdown');
let intervalId;
let value=0;

function flipIt(){

	intervalId = setInterval(()=>{
		spans.forEach((a)=>{
			document.getElementById(a).innerText=String(value);
			document.getElementById(a).style.transform="rotatex(50deg)";		
		})
		value+=1;
	},1000)
}

//flipIt();

let Seconds = document.getElementById('spanSeconds');
let Minutes = document.getElementById('spanMinutes');
let Hours = document.getElementById('spanHours');
let Days = document.getElementById('spanDays');

//seconds.addEventListener('click',()=>{seconds.classList.add('spanWait'),console.log(this)});

//let TimeSecond= 100;
let Times={
	'second':00,
	'minute':59,
	'hour':23,
	'days':00,
}
let elements =[Seconds,Minutes,Hours,Days]

function corrected(tm){
	if(String(tm).length<2){
		return("0"+String(tm));
	}
	else{
		return(tm);
	}
}

function timeCorretion(tm){
	//for seconds 
	if(tm>60){
		Times.second%=60;
		Times.minute+=1;
		if(Times.minute>60){
			Times.minute%=60;
			Times.hour+=1;
		}
		if(Times.hour>24){
			Times.hour%=24;
			Times.days+=1;
		}
	}
}

function manipulate_time(){
	//let tempLocalTime = Date().split(' ')[4].split(':');
	//console.log(tempLocalTime);
	////change Seconds
	if(Seconds.classList.contains('spanWait')==false){
		Seconds.classList.add('spanWait');
	}
	//Seconds.innerText=corrected(TimeSecond);
	Times.second+=1;
	let rightTime ;
	if(Times.second>60){
		//let crtime = corrected(Times.second)
		rightTime = timeCorretion(Times.second);
	}
	rightTime= String(corrected(Times.second));
	Seconds.innerText=rightTime;
	Minutes.innerText=String(corrected(Times.minute));
	Hours.innerText=String(corrected(Times.hour));
	Days.innerText=String(corrected(Times.days));

}

function run_time(){
	intervalId=setInterval(
		()=>{
			manipulate_time();
		},1000
	);
};
run_time();

//manipulate_time();
