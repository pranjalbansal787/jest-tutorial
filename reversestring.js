// Function to reverse a string
const reversestring = str => 
    str // Start with the input string
        .toLowerCase() // Convert the string to lowercase
        .split('') // Split the string into an array of characters
        .reverse() // Reverse the array of characters
        .join(''); // Join the array back into a string

// Export the function to be used in other files
module.exports = reversestring;
