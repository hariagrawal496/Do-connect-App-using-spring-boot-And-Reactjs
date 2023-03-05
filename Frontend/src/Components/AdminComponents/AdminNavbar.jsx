import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink,useHistory } from 'react-router-dom';

import './style.css';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();



const useStyles = makeStyles({
    header: {
        backgroundColor: '#212121',
    },
    spacing: {
        paddingLeft: 20,
        color: '#fff',
        fontSize: '18px',
        textDecoration: 'none',
    },
    spacings:{
        paddingLeft: '50%' ,
    }
});


const AdminNavbar = () => {

    const classes = useStyles();
    const history = useHistory();


    const notify = (msg) => {
        toast.success(msg, {
            position: 'top-right',
             autoClose: 3000,
             hideProgressBar: true,
             closeOnClick: false,
            pauseOnHover: true,
             draggable: false,
              progress: undefined,
               theme: 'colored'
        });
    }

const handlelogout = () =>{
    notify("Logout successfully");
    history.push("/");
}


    return (
        //creating the navlinks for the admin operations.
        <AppBar className={classes.header} position="static">
            <Toolbar >
                <NavLink to="/alladmins" className={classes.spacing}>Admins</NavLink>

                <NavLink to="/all" className={classes.spacing}>Users</NavLink>

                <NavLink to="/qa" className={classes.spacing}>Questions</NavLink>

                <NavLink to="/usertoadminqa" className={classes.spacing}>User_Questions</NavLink>

                <NavLink to="/"   className={classes.spacings}>
                    <button onClick={() => handlelogout()} >Logout</button> 
                </NavLink>
                
            </Toolbar>
        </AppBar>
    )
}

export default AdminNavbar;