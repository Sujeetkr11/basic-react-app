import React from 'react';
import logo from './logo.svg';
import './App.css';

function Page() {
  return ( //make sure to add this
  <div>
    <h1>My Awesome React Web App</h1>
    <h3>Reasons I Love React</h3>
    <ol>
      <li>It's composable.</li>
      <li>It's declarative.</li>
      <li>It's a hireable skill.</li>
      <li>It's actively maintained by skilled people.</li>
    </ol>
  </div>
)}

function App() {
  return (
    <div className="App">
      <Page />
    </div>
  );
}

export default App;
