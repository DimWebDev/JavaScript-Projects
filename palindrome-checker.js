function palindrome(str) {

    let palindromeStr = str.replace(/\W+|_/g, "").toLowerCase();

    let reversedStr = palindromeStr.split("").reverse().join("");
    // We use the split method in order to apply later the array method reverse()
    if(palindromeStr != reversedStr) {
        return false;
    }
    
    
    return true;
}



let result =palindrome("eye");
console.log(result)