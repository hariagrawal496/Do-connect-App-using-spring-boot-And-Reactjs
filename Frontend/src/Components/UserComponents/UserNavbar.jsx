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
        marginLeft:'60%',
        paddingLeft: 20,
        color: '#fff',
        fontSize: '18px',
        textDecoration: 'none',
    }
});
//user navigation bar
const UserNavbar = () => {
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
        //creating navlinks for the user operations
        <AppBar className={classes.header} position="static">
            <Toolbar >

            <NavLink to="/userqa" className={classes.spacing}>Question_Menu</NavLink>

            <NavLink to="/UserAskedQuestion" className={classes.spacing}>Asked_Question</NavLink>

            <NavLink to="/userchat" className={classes.spacings}>
                <button>Chat</button></NavLink>
            
            <NavLink to="/" className={classes.spacing}>
                    <button onClick={() => handlelogout()}> Logout </button>
            </NavLink>

            </Toolbar>
        </AppBar>
    )
}

export default UserNavbar;