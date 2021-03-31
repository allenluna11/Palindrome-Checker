const palindrome = document.getElementById("palindrome");
const result = document.getElementById("result");
const convertToPalindrome = document.getElementById("btn");


convertToPalindrome.addEventListener("click", () => {
    var regularExpression  = /[\W_]/g;
    var lowerRegValue = palindrome.value.toLowerCase().replace(regularExpression);
    var reverseResult = lowerRegValue.split("").reverse().join("");

    if(reverseResult === lowerRegValue){
        result.innerHTML = "Palindrome";
    }else {
        result.innerHTML = "Not a Palindrome";
    }
    
})