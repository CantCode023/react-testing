import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar.js';
import Home from './components/Home.js';
import Page3 from './components/Page3.js';
import Page2 from './components/Page2.js';
import PageNotFound from './components/404.js';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/page2" component={Page2}/>
        <Route exact path="/page3" component={Page3}/>
        <Route component={PageNotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
