const axios = require('axios'); // Import axios for making HTTP requests

const functions = {
    // Function to add two numbers
    add: (num1, num2) => num1 + num2,

    // Function to return null
    isNull: () => null,

    // Function to return the value passed to it
    checkValue: x => x,

    // Function to create a user object with firstName and lastName properties
    createUser: () => {
        const user = { firstName: "Pranjal" }; // Create an object with firstName
        user["lastName"] = "Bansal"; // Add lastName property to the object
        return user; // Return the user object
    },

    // Function to fetch a user from an API
    fetchUser: () => axios
        .get('https://jsonplaceholder.typicode.com/users/1') // Make a GET request to the API
        .then(res => res.data) // Return the data from the response
        .catch(err => 'error') // Return 'error' if there's an error
};

// Export the functions object to be used in other files
module.exports = functions;
