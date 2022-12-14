
const countdown = document.getElementById('countdown');
let intervalId;
let value=0;


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

function corrected(tm){
	if(String(tm).length<2){
		return("0"+String(tm));
	}
	else{
		return(tm);
	}
}

// time change calculation
function timeCorretion(tm){
	Times.second=60;
	Minutes.classList.add('spanWait');
	Times.minute-=1;
	setTimeout(()=>{Minutes.classList.remove('spanWait')},1000);
	if(Times.minute<0){
		Times.minute=60;
		Times.hour-=1;
		if(Times.Hours<0){
			Times.Hours=23;
			Times.days-=1;
			if(Times.days==0){
				Times.days=0;
			}
		}
	}

}
function manipulate_time(){

	////change Seconds
	if(Seconds.classList.contains('spanWait')==false){
		Seconds.classList.add('spanWait');
	}

	//Seconds.innerText=corrected(TimeSecond);
	Times.second-=1;
	let rightTime ;
	if(Times.second<0){
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
