
const countdown = document.getElementById('countdown');

//creating no of divs

let elements=['Days','Hours','Minutes','Seconds'];

for(let i = 0; i<elements.length; i++ ){
	let child1 = document.createElement('div');
	child1.setAttribute('id','timer');

	let oneHalf = document.createElement('div');
	oneHalf.setAttribute('id','oneHalf');
	oneHalf.innerText="22";
	let secondHalf = document.createElement('div');
	secondHalf.setAttribute('id',"secondHalf");
	secondHalf.innerText="22";
	let backup = document.createElement('div');
	backup.setAttribute('id','backup');
	//child1.innerText="Hello world";
	
	backup.appendChild(oneHalf);
	backup.appendChild(secondHalf);
	child1.appendChild(backup);


	countdown.appendChild(child1);
	//console.log(elements[i]);
}
