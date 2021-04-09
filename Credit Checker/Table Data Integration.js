let gender=prompt('Enter your sex').toLowerCase();
let age=parseInt(prompt('Enter your age'));
let income=parseInt(prompt('Enter your income'));
let maritalStatus=prompt("Enter 'married' or 'unmarried'").toLowerCase();
let ownsHouse=prompt("'Do you own a house? Enter 'yes' or 'no'").toLowerCase();


// I selected the factors from the table, which make a female client of the bank
// credible based on the given variables of the table, and I created these
// statements with logical operators to test all of these variables 
// at the same time. 

// I tested all the examples of the table and I get
// a positive feedback. The code runs and evaluates
// the credibility of each cliend of the bank
// taking into account all the variables of
// the table at the same time.  
// Moreover I used my own examples to test the credibility
// of potential future loan applicants. 

//---------------MALE CREDIBILITY EVALUATION


if(age>=36 && maritalStatus==='married' && (ownsHouse==='yes'|| ownsHouse==='no') && income>=52000 && gender==='male'){
	console.log('Credible Client')
} else if (age<36 && gender==='male'){
	console.log('not credible client')
 }


//---------------FEMALE CREDIBILITY EVALUATION

if( age>=45 && maritalStatus==='married' && ownsHouse==='yes' && income>=30000 && gender==='female'){
	console.log('Credible Client')
}else if(age>=45 && maritalStatus==='unmarried' && ownsHouse==='yes' && income>=30000 && gender==='female'){
	console.log('not credible client')
}else if(age>=23 && (maritalStatus==='unmarried'|| maritalStatus==='married') 
	&& ownsHouse==='yes' && income>=40000 && gender==='female') {
	console.log('Credible client')
} else if ( age>=50 && maritalStatus==='married' && ownsHouse==='yes' && income>=28000 && gender==='female'){
	console.log('credible Client')
}else if (age<=29 && maritalStatus==='married' && ownsHouse==='yes' && income>=28000 && gender==='female'){
	console.log(' not credible client')
} 