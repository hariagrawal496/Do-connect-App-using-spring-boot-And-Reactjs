import React from 'react';
import { AppBar, makeStyles, Toolbar } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import '../App.css';
import { blue} from '@material-ui/core/colors';

const useStyles = makeStyles({
    header: {
        backgroundColor: blue
    },
    spacing: {
        paddingLeft: 20,
        color: '#fff',
        fontSize: '18px',
        textDecoration: 'none',
    }
});

const Navbar = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.header} position="static">
            <Toolbar >
            <img className='logo' src="https://pentagram-production.imgix.net/3b6abdde-9ffb-4439-a571-6e96ac5ba8e7/emo_dcentertainment_02.jpg?rect=%2C%2C%2C&w=640&fm=jpg&q=70&auto=format"></img>
                <NavLink to="/" className={classes.spacing}> Home</NavLink>
                <NavLink to="admin-register" className={classes.spacing}>Admin</NavLink>
                <NavLink to="user-register" className={classes.spacing}>User</NavLink>
            </Toolbar>
        </AppBar>

    )
}

export default Navbar;