console.log("Practical Task 2");
console.log("");

//Define prompt message.
let word = prompt("Enter a word of your choice:");

/*Control for empty and nontext values using a while loop. If the first entry is a word, programme will prompt user to check that it is a word, allowing user to either enter the same word or change the word. If the user enters number, it will continue to prompt until user enters a word. Programme will also check against any empty spaces at the borders*/
let userInput;
while (typeof userInput !== "string" || userInput === "" || !isNaN(userInput) || userInput.trim() === "") {
    alert("Please confirm word entry");
    userInput = word = prompt("Enter a word");
}

//Creating a function to check if the "word" entered is a palindrome or not
function isPalindrome(word) {
    const letters = word.toLowerCase().split("");
    
    while (letters.length > 1) {
        if (letters.shift() !== letters.pop()) {
            return word + " is not a palindrome";
        }
    }
    return word + " is a palindrome";
}
console.log(word);
console.log(isPalindrome(word));

// Indicate an end of code
console.log("End of code");
console.log(""); // Introduce an empty line for better readability.