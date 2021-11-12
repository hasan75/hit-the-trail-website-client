import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route exact path='/home'>
            <Home></Home>
          </Route>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
