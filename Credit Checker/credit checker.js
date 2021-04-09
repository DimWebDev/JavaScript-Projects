let gender=prompt('Enter your sex').toLowerCase();
let age=parseInt(prompt('Enter your age'));
let income=parseInt(prompt('Enter your income'));
let maritalStatus=prompt("Enter 'married' or 'unmarried'").toLowerCase();
let ownsHouse=prompt("'Do you own a house? Enter 'yes' or 'no'").toLowerCase();

// On the basis of the algorithm that I devised
// In my answer I wrote this code, which runs
// and evaluates who is eligible for a loan and 
//who is not, taking into account all variables,
// John gave me at the same time.

 if(gender==='male' && income>=50000 && age>55) {
 	console.log("Eligible for loan")
 } else if(gender==='male' && (maritalStatus==='unmarried' || maritalStatus==='married') && age<=55 && income>40000) {
 	console.log('Eligible for Loan')
 } else if(gender==='male' && ownsHouse==='yes') {
 	console.log('Eligible for Loan')
 } else if(gender==='male' && ownsHouse==='no'){
 	console.log('Not eligible!')
 }


 if(gender==='female' && income>=50000  && age>55) {
 	console.log("Eligible for loan")
 }else if(gender==='female' && income>=35000 && age<=55 && maritalStatus==='married') {
 	console.log("Eligible for loan")
 } else if(gender==='female' && maritalStatus==='unmarried' && age<=55 && income>45000) {
 	console.log('Eligible for Loan')
 } else if(gender==='female' && ownsHouse==='yes') {
 	console.log('Eligible for Loan')
 } else if(gender==='female' && ownsHouse==='no'){
 	console.log('Not eligible!')
 }


