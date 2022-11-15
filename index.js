
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

flipIt();
