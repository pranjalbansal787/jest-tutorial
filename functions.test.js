const functions = require('./functions');

// toBe: Tests if the result is exactly equal to the expected value.
test('Should add 2+2', () => {
    expect(functions.add(2, 2)).toBe(4);
});

// not.toBe: Tests if the result is not equal to the expected value.
test('Should not add 2+2', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull: Tests if the result is null.
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy: Tests if the result is a falsy value (0, null, undefined, false, NaN, or an empty string).
test('Should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});

// toEqual: Tests if the result is deeply equal to the expected value (useful for objects and arrays).
test('Should be Pranjal Bansal object', () => {
    expect(functions.createUser()).toEqual({
        firstName: "Pranjal",
        lastName: "Bansal"
    });
});

// toBeLessThan: Tests if the result is less than the expected value.
test('Should be less than 1600', () => {
    const load1 = 700;
    const load2 = 500;
    expect(load1 + load2).toBeLessThan(1600);
});

// toBeGreaterThan: Tests if the result is greater than the expected value.
test('Should be greater than 1600', () => {
    const load1 = 700;
    const load2 = 1000;
    expect(load1 + load2).toBeGreaterThan(1600);
});

// toBeLessThanOrEqual: Tests if the result is less than or equal to the expected value.
test('Should be less than or equal to 1600', () => {
    const load1 = 700;
    const load2 = 900;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// toBeGreaterThanOrEqual: Tests if the result is greater than or equal to the expected value.
test('Should be greater than or equal to 1600', () => {
    const load1 = 700;
    const load2 = 1000;
    expect(load1 + load2).toBeGreaterThanOrEqual(1600);
});

// not.toMatch: Tests if a string does not match the given regular expression.
test('Should not match I', () => {
    expect('team').not.toMatch(/I/);
});

// toContain: Tests if an array contains a specific item.
test('Username should contain admin', () => {
    const array = ['pranjal', 'bansal', 'admin'];
    expect(array).toContain('admin');
});

// Working with async data using Promises.
test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1); // Ensures that a certain number of assertions are called.
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
});

// Working with async data using async/await.
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1); // Ensures that a certain number of assertions are called.
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});

/**
 * Advantages of Jest:
 * - Easy to set up and use with a clear and straightforward API.
 * - Built-in mocking, assertions, and test coverage reports.
 * - Fast and parallel test execution for quick feedback.
 * - Great integration with many JavaScript frameworks and libraries, especially React.
 * - Snapshot testing for UI components.
 * 
 * Disadvantages of Jest:
 * - Jest is primarily designed for JavaScript, so it might not be suitable for projects in other languages.
 * - For very large projects, configuration and test execution might become slower.
 * - Jest's mocking system, while powerful, can be complex and may require a learning curve.
 */

/**
 * Additional Notes:
 * - Always ensure that your test cases are isolated and independent of each other.
 * - Use meaningful and descriptive test names to make it clear what each test is validating.
 * - Regularly run your tests to catch issues early in the development process.
 * - Consider using a linter and code formatter to maintain code quality and consistency.
 * - Leverage Jest's powerful mocking and spying capabilities to create more robust tests.
 */

// Installation: Install Jest using npm:
// npm install --save-dev jest

// Configuration: Add a test script to your package.json to run Jest easily:
// "scripts": {
//   "test": "jest"
// }

// Running Tests: Run all tests using:
// npm test

// Expect Methods:
// toBe(value): Checks for strict equality (using ===).
// not.toBe(value): Checks for strict inequality.
// toBeNull(): Checks if the value is null.
// toBeFalsy(): Checks if the value is a falsy value.
// toEqual(value): Checks for deep equality (useful for objects and arrays).
// toBeLessThan(value): Checks if a value is less than another value.
// toBeGreaterThan(value): Checks if a value is greater than another value.
// toBeLessThanOrEqual(value): Checks if a value is less than or equal to another value.
// toBeGreaterThanOrEqual(value): Checks if a value is greater than or equal to another value.
// not.toMatch(regex): Checks if a string does not match a regular expression.
// toContain(item): Checks if an array contains a specific item.

// Async Tests:
// Promises: Use return to ensure Jest waits for the promise to resolve.
// Async/Await: Use async and await for a more readable syntax.
// expect.assertions(number): Ensures that a certain number of assertions are called in a test. Useful for async tests to ensure the callback gets called.
