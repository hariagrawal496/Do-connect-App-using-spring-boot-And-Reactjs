import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AdminNavbar from './AdminNavbar';
import Home from '../Home';

import AllUsers from '../UserComponents/AllUsers';
import AddUser from '../UserComponents/AddUser';
import EditUser from '../UserComponents/EditUser';

import AllQAs from '../QA-Components/AllQAs';
import AddQA from '../QA-Components/AddQA';
import EditQA from '../QA-Components/EditQA';

import AllAdmins from './AllAdmins';
import AddAdmin from './AddAdmin';
import EditAdmin from './EditAdmin';

import UserAllQAs from '../User-QA-Components/UserAllQAs';
import UserEditQA from '../User-QA-Components/UserEditQA';

import AdminViewQA from './AdminViewQA';


function AdminHome() {    //Admin home page display method
  return (

    //routing paths for admin operations
    <Router>
      <AdminNavbar/>
      <Switch>
        {/*Home*/ }
        <Route path="/" component={Home} exact />

           {/* Admin navbar*/ }
        <Route path="/all" component={AllUsers} exact />     
        <Route path="/add" component={AddUser} exact />
        <Route path="/edit/:id" component={EditUser} exact />

        <Route path="/alladmins" component={AllAdmins} exact />     
        <Route path="/addadmins" component={AddAdmin} exact />
        <Route path="/editadmin/:id" component={EditAdmin} exact />

        <Route path="/qa" component={AllQAs} exact />
        <Route path="/addqa" component={AddQA} exact />
        <Route path="/update/:id" component={EditQA} exact />

        <Route path="/usertoadminqa" component={UserAllQAs} exact />
        <Route path="/usertoadminupdate/:id" component={UserEditQA} exact />

        <Route path="/adminview/:id" component={AdminViewQA} exact />
        
      </Switch>
    </Router>
  );
}

export default AdminHome;

