
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

let TimeSecond= 100;
let elements =[Seconds,Minutes,Hours,Days]

function corrected(tm){
	if(String(tm).length<2){
		return("0"+String(tm));
	}
	else{
		return(tm);
	}
}

function manipulate_time(){
	//let tempLocalTime = Date().split(' ')[4].split(':');
	//console.log(tempLocalTime);
	////change Seconds
	if(Seconds.classList.contains('spanWait')==false){
		Seconds.classList.add('spanWait');
	}
	Seconds.innerText=corrected(TimeSecond);
	if(TimeSecond>1){
	TimeSecond-=1;
	}
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
