import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Switch>
          <Header></Header>
          <Route exact path='/'>

          </Route>
        </Switch>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
