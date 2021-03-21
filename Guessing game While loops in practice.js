let yourNumber=parseInt(prompt('Enter your number'));
// we use parseInt in order to convert the user's input to a number.
while(!yourNumber) {
	yourNumber=parseInt(prompt('Enter a valid number!'));
}
const targetNumber= Math.floor(Math.random()*yourNumber) +1
//targetNumber is what the user should guess

let user_guess=parseInt(prompt('Enter your guess!'));
while (parseInt(user_guess)!==targetNumber) {
	if (user_guess==='quit') {
	  alert('You decided to quit! No problem!')
	 break;
	}
	if(user_guess>targetNumber) {
		user_guess=prompt('Too high! Guess again!');
	}
	else {
		user_guess=prompt('Too Low! Guess again');
	}
	
}
if (user_guess==='quit') {
console.log(`You decided to quit! This is fine!`);
} else  {
alert(` CONGRATS!!! your guess is ${user_guess} and the goal was to find the random number ${targetNumber}`);
}