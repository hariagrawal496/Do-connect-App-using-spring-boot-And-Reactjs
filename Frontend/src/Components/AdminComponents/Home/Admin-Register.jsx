import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addAdmin} from '../../../service/adminApi';
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

const AdminRegister = () => {    //user registration method

    const [admin, setAdmin] = useState(initialValue);
    const { name, username, password, email, phone } = admin;

    const history = useHistory();

    const onValueChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
        console.log(admin);
    }

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
    

    //add the data into the backend..
    const addAdminDetails = async () => {
        await addAdmin(admin);
        notify("Admin Register Successfully")
        history.push('/admin-login');
    }

    return (

        //Admin registration form
        
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center">Admin Registration Form</Typography>
                <FormGroup>
                    <FormControl>
                        <InputLabel>Name</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="name" value={name} required/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>User Name</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="username" value={username} required/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Password</InputLabel>
                        <Input type ="password" onChange={(e) => onValueChange(e)} name="password" value={password} required/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Email address</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="email" value={email} required/>
                    </FormControl>
                    <FormControl>
                        <InputLabel>Phone Number</InputLabel>
                        <Input onChange={(e) => onValueChange(e)} name="phone" value={phone} required/>
                    </FormControl>
                    <Box my={3}>
                        <Button variant="contained" onClick={() => addAdminDetails()} color="primary" align="center">Register</Button>
                        <Button onClick={() => history.push("/alladmins")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                        <br></br><br></br>
                        Already Registered ? Please Login <Button variant="contained" onClick={() => history.push("/admin-login")} color="primary" align="center">Login</Button>

                    </Box>
                </FormGroup>
            </Box>
        </Container>
    )
}


export default AdminRegister;