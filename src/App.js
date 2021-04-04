import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Display from './components/display/App'
import Home from './components/home/App'
import Scan from './components/scan/App'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/scan' component={Scan} />
          <Route path='/generate' component={Display} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
