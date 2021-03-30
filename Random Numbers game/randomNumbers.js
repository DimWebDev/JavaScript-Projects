//This is a game to generate random number upon clicking the button.
//It was made so as to practice the addEventListener() method;


//To generate a random color in a RGB form we need three numbers 
const button=document.querySelector('button');
const h1=document.querySelector('h1');


button.addEventListener('click', function(){
	const newColour=randomColour();
	document.body.style.backgroundColor=newColour;
	h1.innerText=newColour;
	button.style.color=randomColour();
})


const randomColour=()=>{
	const r=Math.floor(Math.random()*255);
	const g= Math.floor(Math.random()*255);
	const b=Math.floor(Math.random()*255);
	//Now I use a string template literal to create the color
	return `rgb(${r}, ${g}, ${b})`;
}



