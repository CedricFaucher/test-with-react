// All right, let's test that 2 + 2 equals 4!
// describe allows to regroup multiple tests together
describe("Math", () => {
  // you can use test() as well as it(), they are both the same, so it is more for readability
  test("2 + 2 = 4", () => {
    // toBe is for object equality
    expect(2+2).toBe(4);
  
    // toEqual is for object value equality, it will recursively check every value of both objects
    // as you see, both toBe() and toEqual() are interchangeable for numbers
    expect(2+2).toEqual(4);
  
    // but for float, you better use toBeCloseTo() to not get an error for rounding
    expect(1.9+2.1).toBeCloseTo(4.0);
  
    // not is like using the ! operator
    expect(2+2).not.toBe(3);
  
    // you cannot stack not, this would not work
    // expect(2+2).not.not.toBe(4);
  
    // toBe(), toBeCloseTo() and toEquals() are matchers, there is a lot of them to test all kinds of equality
    // here are some of them for numbers
    expect(2+2).toBeGreaterThan(3);
    expect(2+2).toBeGreaterThanOrEqual(4);
  
    // for strings, we can use regular expressions
    expect("two plus two equals four").toMatch(/four/);
  
    // for arrays
    expect([2+2]).toContain(4);
  
    // for truthiness
    expect(null).toBeNull();
    expect(null).toBeDefined();
    expect(null).toBeFalsy();
  
    // there is more, the list of matchers is massive
  });

  // Example for it()
  it("contains the letter a", () => {
    expect("Math").toMatch(/a/);
  });
});





