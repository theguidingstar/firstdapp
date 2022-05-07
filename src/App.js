import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <div>
          <h1>This is my dApp!</h1>
          <p>Here we can set or get the mood:</p>
          <label for="mood">Input Mood:</label> <br />
          <input type="text" id="mood" />
        </div>
        <button onclick="getMood()">Get Mood</button>
        <button onclick="setMood()">Set Mood</button>
      </header>
    </div>
  );
}

export default App;
