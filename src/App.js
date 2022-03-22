import logo from './logo.svg';
import BaseAndMatchers from './jest/BaseAndMatchers'
import './App.css';
import Mocks from './jest/Mocks';
import Component from './componentTesting/Component';
import Enzyme from './enzyme/Enzyme';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* ******************************************************* */}
      <main>
        <BaseAndMatchers />
        <Mocks array={[1, 2, 3, 4, 5]} />
        <Component name="John" />
        <Enzyme name="Bob" />
      </main>
    </div>
  );
}

export default App;
