import * as React from 'react';
import Enzyme from './Enzyme';
import { shallow, mount } from 'enzyme';

// Enzyme uses two way to render, shallow which only render the component itself, and mount which will render the DOM overall

// With shallow, we can test basic things about our component
test("There is 2 p inside our component", () => {
  const comp = shallow(<Enzyme />);
  expect(comp.find('p')).toHaveLength(2);
});

// We can test the changes from our state too
test("The state changes when we type in input", () => {
  const comp = shallow(<Enzyme />);

  comp.setState({ name: "toto" });

  // Since the state is now inside a hook, we need to do more work to be able to test it
  // We need to mock the implementation of the hook and spy on its value
  const stateSetter = jest.fn();
  jest.spyOn(React, 'useState').mockImplementation(stateValue => [stateValue="I have changed", stateSetter]);

  // Then we can simulate the change inside the input field to trigger the change of the state
  comp.find('input').simulate('change', { target: { name: "stateChange", value: "I have changed!" } });

  // We then look for the second paragraph and take out the state from it
  const stateFromLine = comp.find('p').get(1).props.children[1];

  expect(stateFromLine).toEqual("I have changed!");
});

// With mount, we can test that we received the props correctly
test("There is a prop", () => {
  const comp = mount(<Enzyme name="Charlie" />);
  expect(comp.props().name).toEqual("Charlie");

  // We can also set the props directly
  const comp2 = mount(<Enzyme />);
  comp2.setProps({ name: "Delta" });
  expect(comp2.props().name).toEqual("Delta");
});