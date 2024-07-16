const reverseString = require('./reversestring'); // Import the reverseString function

// Test to check if the reverseString function is defined
test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

// Test to check if the string is reversed correctly
test('test if string reverses', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

// Test to check if the string is reversed correctly when it contains uppercase letters
test('test if string reverses with UpperCase', () => {
    expect(reverseString('Hello')).toEqual('olleh');
});
