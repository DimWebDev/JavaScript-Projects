              

                //******TO DO LIST****************
                //===============================

//The user should type list two times to list the tasks
//The user should type new two times to add new items to the list
//The user should type delete and add the index of the task he wishes to delete
//The user should type exit or quit to quit the app



let userInput=prompt('What would you like to do?')
const toDoList=['Walk the dog', 'Feed the cat', 'Study for the test'];
while(userInput!== 'quit' && userInput!=='exit') {
	userInput=prompt('What would you like to do?')
	if(userInput==='list') {
		console.log('=*=*=*=*=*=*=*=*=*=*=*=*=*=*')
		for (let i=0; i<toDoList.length; i++) {
			console.log(`${i} task is: ${toDoList[i]}`)
		} 
		console.log("=*=*=*=*=*=*=*=*=*=*=*=*=*=*")
	} else if (userInput==="new") {
		const newTask=prompt('Enter a new task to your to do list');
		toDoList.push(newTask);
		console.log(`${newTask} is added to the to Do List`)
	} else if(userInput==='delete') {
		const index = prompt('Enter the index of the task you wish to delete');
		if (!Number.isNaN(index)) {
            const deleted = toDoList.splice(index, 1); // we set a string in splice it defaults it to index 0
            console.log(`Ok, deleted: ${deleted[0]}`);
           }
        else {
        	console.log('invalid index');
        } 
	} 
	userInput=prompt('What would you like to do?')
}
console.log('Ok you quit the APP! No problem!');