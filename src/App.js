import './App.css';
import NavBarra from './components/NavBarra';
import HomeComponent from './components/HomeComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import listarUsuarios from './components/listarUsuarios';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarra></NavBarra>
        <Switch>
          <Route exact path="/" component={HomeComponent}></Route>
          <Route exact path="/usuario" component={listarUsuarios}></Route>
        </Switch>
        <FooterComponent></FooterComponent>
      </Router>
    </div>
  );
}

export default App;
