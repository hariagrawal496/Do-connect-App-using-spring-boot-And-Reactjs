import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addUser } from '../../service/userApi';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const initialValue = {    //declaring the initial values for user details
    name: "",
    username: "",
    password: "",
    email: "",
    phone: "",
}

const UserRegister = () => {    //user registration method

    const [user, setUser] = useState(initialValue);
    const { name, username, password, email, phone } = user;

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


    const onValueChange = (e) => {
        //  console.log(e);
        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const addUserDetails = async () => {
        await addUser(user);
        notify("User Register Successfully")
        history.push('/user-login');
    }

    

    return (

        //User registration form
        
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center">User Registration Form</Typography>
                <FormGroup>
                    <FormControl>
                        <InputLabel>Name</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="name" value={name} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>User Name</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="username" value={username} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Password</InputLabel>
                        <Input type="password" onChange={(e) => onValueChange(e)} name="password" value={password} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Email address</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="email" value={email} />
                    </FormControl>
                    <FormControl>
                        <InputLabel>Phone Number</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} />
                    </FormControl>
                    <Box my={3}>
                        <Button variant="contained" onClick={() => addUserDetails()} color="primary" align="center">Register</Button>
                        <Button onClick={() => history.push("/all")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                        <br></br><br></br>
                        Already Registered ? Please Login <Button variant="contained" onClick={() => history.push("/user-login")} color="primary" align="center">Login</Button>

                    </Box>
                </FormGroup>
            </Box>
        </Container>
    )
}


export default UserRegister;