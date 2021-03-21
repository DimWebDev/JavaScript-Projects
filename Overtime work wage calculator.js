
//*************OVERIMTE WEEKLY SALARY CALCULATOR*************
const normalMoney = parseInt(prompt("Enter what is the normal payment per hour."))
let workHours = parseInt(prompt('Enter you many hours wour work.'));

// with while loop and ! we test if the input is NaN, thus a falsy value.
while(!workHours) {
 	workHours=parseInt(prompt('Enter a numeric input with maximum working hours 40!'));
}
while(!normalMoney) {
 	normalMoney=parseInt(prompt('Enter a numeric input!'));
}

if(workHours<=40) {
	const normalWage= workHours*normalMoney;
	alert(`Your weekly wage amounts to $${normalWage}`);
	console.log(`Your weekly wage amounts to $${normalWage}`);
} else if (workHours>40){
	alert('So you work ovetime! Here we can calculate your wage as well. Every overtime hour is like working one hour and a half. It costs more to your employer!');
	console.log('Do you work ovetime? Here we can calculate your wage as well');
	let extraHours=parseInt(prompt('How many hours above the weekly limit of 40 do you work?'));
	while(!extraHours) {
		extraHours=parseInt(prompt('Enter a numeric input!'));
	}
	//At this place for the sake of the calculation we estimate that
	//one working hour above the weekly limit of 40 hours is like
	// working an extra half hour so it is
	// has a different value as a billable time.
	overtimeWage=(40*normalMoney) +((extraHours*1.5)*normalMoney);
	console.log(`Your final wage is: ${overtimeWage}`);
}
