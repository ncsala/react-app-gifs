import "./App.css";
import ListOfGifts from './components/ListOfGifts.js';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifts keyword='ricky and morty'/>
      </section>
    </div>
  );
}

export default App;
