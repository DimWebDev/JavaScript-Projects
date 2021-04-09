let gender=prompt('Enter your sex').toLowerCase();
let age=parseInt(prompt('Enter your age'));
let income=parseInt(prompt('Enter your income'));
let maritalStatus=prompt("Enter 'married' or 'unmarried'").toLowerCase();
let ownsHouse=prompt("'Do you own a house? Enter 'yes' or 'no'").toLowerCase();

//For male loan applicants we take into account the age, 
// which in the given example is only above 40.
// For males of lower age nothing is mentioned,
// so this codes applies only to males above 40 years old

//  if(gender==='male' && income>=50000 && age>55 && maritalStatus==='married') {
//  	console.log("Eligible for loan")
//  } else if(gender==='male' && maritalStatus==='unmarried' && age>40 && income>40000) {
//  	console.log('Eligible')
//  } else if(gender==='male' && ownsHouse==='yes') {
//  	console.log('Eligible')
//  } else if(gender==='male' && ownsHouse==='no'){
//  	console.log('Not eligible!')
//  }

// //For female loan applicants the age is not a factor so the
// // only checks the income, the marital Status and the
// // owning of estate.
//  if(gender==='female' && income>=35000 && maritalStatus==='married') {
//  	console.log("Eligible for loan")
//  } else if(gender==='female' && maritalStatus==='unmarried' && income>45000) {
//  	console.log('Eligible')
//  } else if(gender==='female' && ownsHouse==='yes') {
//  	console.log('Eligible')
//  } else if(gender==='female' && ownsHouse==='no'){
//  	console.log('Not eligible!')
//  }


// I selected the factors from the table, which make a female client of the bank
// credible based on the given variables of the table, and I created these
// statements with logical operators to test all of these variables 
// at the same time. 

// I tested all the examples of the table and I get
// a positive feedback and moreover I used my own examples to test the credibility
// of potential future loan applicants.

//---------------MALE LOAN APPLICANTS

if(age>=36 && maritalStatus==='married' && (ownsHouse==='yes'|| ownsHouse==='no') && income>=52000 && gender==='male'){
	console.log('Credible Client')
} else if (age<36 && gender==='male'){
	console.log('not credible')
 }


//---------------FEMALE LOAN APPLICANTS
if( age>=45 && maritalStatus==='married' && ownsHouse==='yes' && income>=30000 && gender==='female'){
	console.log('Credible Client')
}else if(age>=23 && (maritalStatus==='unmarried'|| maritalStatus==='married') 
	&& ownsHouse==='yes' && income>=40000 && gender==='female') {
	console.log('Credible client')
} else if ( age>=50 && maritalStatus==='married' && ownsHouse==='yes' && income>=28000 && gender==='female'){
	console.log('credible')
}else if (age<=29 && maritalStatus==='married' && ownsHouse==='yes' && income>=28000 && gender==='female'){
	console.log(' not credible client')
}