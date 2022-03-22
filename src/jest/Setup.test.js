import { animalsInDatabase, initializeAnimalDatabase, clearAnimalDatabase, addAnimal } from '../util/dbSimulation';

// Now let's see how to setup the tests with Jest
// You can do setup before with beforeAll() and beforeEach() and after with afterAll() and afterEach()
// describe() is useful to scope the setup, if you insert them inside of it, it will only apply them for the test inside the scope

// Let say that we have to interact with a database for the tests, we could initialize it in before and clear it in after
beforeAll(() => {
  initializeAnimalDatabase();
});

afterAll(() => {
  clearAnimalDatabase();
});

// Now that we have added our before and after, let's use animalsInDatabase in our test
test("There is 3 animals in the database", () => {
  expect(animalsInDatabase).toHaveLength(3);
});

// Let's test if the database contains our 3 animals in another test instance
test("They are a dog, a cat and a bird", () => {
  expect(animalsInDatabase).toContain("dog");
  expect(animalsInDatabase).toContain("cat");
  expect(animalsInDatabase).toContain("bird");
});

// Now we will try to scope a new call in the database to see how it works inside a describe
describe("Scoping them", () => {
  beforeEach(() => {
    addAnimal();
  });

  // We add one ferret
  test("One ferret", () => {
    expect(animalsInDatabase).toContain("ferret");
  });

  // We add a second ferret since we have a beforeEach() and not a BeforeAll()
  test("Should be of length 5", () => {
    expect(animalsInDatabase).toHaveLength(5);
  });
});