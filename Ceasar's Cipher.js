
function rot13(str){
	let crackedCode="";
	let alphabetHalf1="abcdefghijklm".toUpperCase();
	let alphabetHalf2="nopqrstuvwxyz".toUpperCase();

	for(let i=0; i<str.length; i++){
		// I create a variable letterToCrack to take the value of
		// each index on position i of the str
		let letterToCrack=str[i];

		if(alphabetHalf1.indexOf(letterToCrack)>=0){
			// //Within the conditional statement

			// I want to check if within the first half of
			// the alphabet there is the letterToCrack. 
			// If it is not then the indexOf method will give -1
			// and the code will run the next statement.

			crackedCode += alphabetHalf2[alphabetHalf1.indexOf(letterToCrack)];

// In the above line I take the corresponding letter of the second half of the
// alphabet by using the index of the first half of the alphabet
// this is the index I am using :
//
//						******[alphabetHalf1.indexOf(letterToCrack)]*****


		} else if(alphabetHalf2.indexOf(letterToCrack)>=0){
			crackedCode += alphabetHalf1[alphabetHalf2.indexOf(letterToCrack)];
		} else {

			// We do this else statement
			// in order to take into account
			// non-alphabetical characters like spaces, ! etc.

			crackedCode+=letterToCrack;
		}
	}

  return crackedCode;
}

const  result = rot13("SERR CVMMN!");
console.log(result)