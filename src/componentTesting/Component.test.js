import Component from './Component';
import userEvent from '@testing-library/user-event';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

// react-testing-library allows us to render components and interact with the screen, hence the import names
// In this first test, we will render <Component /> and test if there is certain text in the button
test("Component", () => {
  render(<Component />);
  // This will work as the buttonText contains Bravo
  screen.getByText(/Bravo/);

  // This will fail since there is no text in the component containing Hola
  // screen.getByText(/Hola/);
});

// We can render components with their props as well
test("Props", () => {
  render(<Component name="Paul" />);

  screen.getByText(/Paul/);
});

// When we got the text in the previous test, it was on a button, we can set it to a variable and interact with the button
// Let's trigger the button 3 times and validate that there is 3 on the page
test("Button triggering and state changing", () => {
  // Here, we are using the getByTestId, which is enabling us the possibility to find values in our component by their data-testid
  const { getByTestId } = render(<Component />);

  // We get the button with the data-testid instead of the screen
  const button = getByTestId("button");

  // We trigger the button 3 times
  fireEvent.click(button);
  fireEvent.click(button);
  fireEvent.click(button);

  // Let's validate if there is 3 on screen
  screen.getByText(/3/);

  // We can also validate with the data-testid
  expect(getByTestId("resultString")).toContainHTML("3");
});

// With the import @testing-library/jest-dom, we can also use jest matchers to test the DOM
test("If clicked can be found in the DOM, it should have times", () => {
  render(<Component />);
  
  // We find the element in the DOM containing clicked
  const getClickedElement = screen.getByText(/clicked/);

  // We expect that element to also contain times
  expect(getClickedElement).toHaveTextContent(/times/);
});

// Since we are testing the result of the component in the DOM after the render, we can easily test the children component of the component, resulting in some integration testing
test("If I type inside the input of the child component, the input should change its value", () => {
  render(<Component />);

  // We find the input inside of the child component rendered in the DOM
  const inputField = screen.getByPlaceholderText("I am placeholder, nice to meet you!");

  // We type in the input field
  userEvent.type(inputField, "I am some random text");

  // We expect that the inputField has the text
  expect(inputField).toHaveAttribute('value', "I am some random text");

  // We also expect I am showing what is in the state input: to output the state
  expect(screen.getByText(/I am showing what is in the state input/)).toHaveTextContent("I am some random text");

  // And just like that, we tested that the state in our component is changed correctly inside its children component, which is a light integration test
  // It is possible after that to go more complicated and test API calls that affects the DOM and more
});