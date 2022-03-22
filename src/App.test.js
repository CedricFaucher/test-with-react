import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// ************************************************************************

// Let's use this small test to show off the test structure
test('renders I am a text! string', () => {
  // Arrange
  render(<App />);

  // Act
  const stringElement = screen.getByText(/I am a text!/i);

  // Assert
  expect(stringElement).toBeInTheDocument();

  // As you can see, we arrange our test variables by rendering the component we want to test, we then
  // act by doing screen.getByText() and get the result of act in the variable stringElement, then we
  // assert that the result is in the document, if it is the test pass, else the test fails.
});