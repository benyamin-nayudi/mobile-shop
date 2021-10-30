import { BrowserRouter as Router  , Route , Switch  , Redirect} from 'react-router-dom'
import Cart from "./components/Cart";
import Home from './components/Home';
import Navbar from './components/Navbar';
function App() {
  return (
    <div >
      <Router>
        <Navbar /> 
        <Switch>
          <Route path="/cart" component={Cart} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
