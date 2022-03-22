import Mocks from './Mocks';

// Let's see how to mock functions
// First, let's mock functions without using the Mocks component
test("sumOfArray([1,2,3,4,5]) should return 15", () => {
  // The base of mocking with Jest is using jest.fn(() => {}) to create a function
  const mock = jest.fn(array => array.reduce((a, b) => a + b));

  // We can then use the mocked function to do the test
  const result = mock([1, 2, 3, 4, 5]);
  expect(result).toBe(15);
});

// But what if we want to simulate a result with the mock instead of doing the implementation itself?
// We can do so by using the methods of jest.fn()
test("sumOfArray([1,2,3,4,5]) should return by default 15, but the first time it should return \"Hello World!\"", () => {
  const array = [1,2,3,4,5];

  // Same as previous example, but we add a mockImplementation that will trigger on the first call
  const mock = jest.fn(array => array.reduce((a, b) => a + b))
    .mockImplementationOnce(array => "Hello World!");

  const firstResult = mock(array);
  const secondResult = mock(array);

  // We expect the first call to return the mocked implementation
  expect(firstResult).toBe("Hello World!");
  // We expect subsequent calls to return 15
  expect(secondResult).toBe(15);

  // We can also add these mock methods later in the test and it will still work
  // Here we will use a mockReturnValue() which will return the value directly if we call the mock
  mock.mockReturnValue(4);

  const thirdResult = mock(array);
  const fourthResult = mock(array);

  // Here, we expect both to return 4 since we did not specify to do it once
  expect(thirdResult).toBe(4);
  expect(fourthResult).toBe(4);
});

// But what if the method you want to mock is asynchronous? There is a method for that as well
test("Asynchonous method", async () => {
  const mock = jest.fn().mockResolvedValue(15);

  expect(await mock()).toBe(15);
});
