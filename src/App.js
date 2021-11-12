import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import LogIn from './components/Login/Login';
import Signup from './components/Signup/Signup';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route  path='/login'>
              <LogIn></LogIn>
            </Route>
            <Route  path='/signup'>
              <Signup></Signup>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
