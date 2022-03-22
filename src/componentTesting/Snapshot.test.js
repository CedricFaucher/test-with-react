import Snapshot from "./Snapshot";
import renderer from 'react-test-renderer';

// Snapshot testing is just like the term implies, it is a test that compares a snapshot of a component with a new one
// If they are equal, the test will pass, else it will fail
test("This will be snapshot", () => {
  // We use the renderer from react-test-renderer to render an instance of our component and we convert it to a JSON format
  const renderedComponentJSON = renderer.create(<Snapshot />).toJSON();

  // We expect the JSON of our rendered component to be the same as the previous instance
  // Of course, at first there is no snapshot, but it is taken care of by .toMatchSnapshot()
  // It will create a folder __snapshots__ that will contains our snapshots and will save the snapshot
  // The first instance will pass automatically
  expect(renderedComponentJSON).toMatchSnapshot();
});

// Since the snapshot will fail if you change the rendered component, we need to do something if we changed the way the component is rendered
// Jest has a command to update the snapshot when it fails, it is -u. We should use it if the failing snapshot is failing for a good reason

// We can use the snapshot to test inline as well
test("Testing inline snapshot", () => {
  const renderedComponentJSON = renderer.create(<Snapshot />).toJSON();
  expect(renderedComponentJSON).toMatchInlineSnapshot(`
<div
  className="totiw"
>
  <p
    id="tutu"
  >
    I will be snapshot!
  </p>
</div>
`);
});

// This is an interesting approach if we want to do some TDD, but we need to make sure that we use the correct spacing