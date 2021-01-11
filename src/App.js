import logo from './logo.svg';
import './App.css';
import Folder from './Folder'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Folder />
      </header>
    </div>
  );
}

export default App;
