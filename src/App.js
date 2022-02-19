import "./App.css";
import ListOfGifs from './components/ListOfGifs.js';
import {Link, Route} from "wouter";

/* <ListOfGifs keyword='ricky and morty'/> */
function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App de Gifs</h1>
        <Link to="/gif/panda">Gifs de Pandas</Link>
        <Link to="/gif/cats">Gifs de Gatos</Link>
        <Link to="/gif/lazy animal">Gifs de Animales Perezosos</Link>
        <Route path = '/gif/:keyword' component={ListOfGifs}/>
      </section>
    </div>
  );
}

export default App;
