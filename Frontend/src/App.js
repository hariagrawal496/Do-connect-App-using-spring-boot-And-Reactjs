import './App.css';
import Navbar from  './Components/Navbar';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AdminLogin from './Components/AdminComponents/Home/Admin-Login';
import AdminHome from './Components/AdminComponents/AdminHome';
import AdminRegister from './Components/AdminComponents/Home/Admin-Register';

import UserLogin from './Components/UserComponents/User-Login';
import UserRegister from './Components/UserComponents/User-Register';
import UserHome from './Components/UserComponents/UserHome';


function App() {
  return (
    

    <Router>

       <Navbar />
    
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/admin-register" component={AdminRegister} exact />
        <Route path="/admin-login" component={AdminLogin} exact />
        <Route path="/user-register" component={UserRegister} exact />
        <Route path="/user-login" component={UserLogin} exact />

        <Route path="/user" component={UserHome} exact />
        <Route path="/admin" component={AdminHome} exact />
      </Switch>
    </Router>
  );
}

export default App;