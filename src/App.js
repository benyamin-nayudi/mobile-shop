import { BrowserRouter as Router  , Route , Switch  , Redirect} from 'react-router-dom'
import Cart from "./components/Cart";
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';


import "./App.css"
function App() {
  return (
    <div >
      <Router>
        <Navbar /> 
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/" exact component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
