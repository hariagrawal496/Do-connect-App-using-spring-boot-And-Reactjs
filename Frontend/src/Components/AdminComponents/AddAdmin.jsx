import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addAdmin } from '../../service/adminApi';
import { useHistory } from 'react-router-dom';

const initialValue = {  
    
    //declaring the user properties
    name: "",
    username : "",
    password : "",
    email: "", 
    phone: "",
}

const AddAdmin = () => {   //method to add the users by admin

    const [admin, setAdmin] = useState(initialValue);
    const {name, username, password, email, phone} = admin;

    const history = useHistory();

    const onValueChange = (e) =>
    {
        setAdmin({...admin, [e.target.name]: e.target.value});
       console.log(admin);
    }

    //adding the data of add button
    const addAdminDetails = async () =>{
       await addAdmin(admin);
       history.push('/alladmins');
    }

    return (

        //form to add user details
        
        <Container maxWidth="sm">
            <Box my={5}>
            <Typography variant="h5" align="center">Add Admin Details</Typography>
            <FormGroup>
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="name" value={name} required />
                </FormControl>
                <FormControl>
                    <InputLabel>User Name</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="username" value={username}  required/>
                </FormControl>
                <FormControl>
                    <InputLabel>Password</InputLabel>
                    <Input type="password" onChange={(e) => onValueChange(e)} name="password" value={password} required />
                </FormControl>
                <FormControl>
                    <InputLabel>Email address</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="email" value={email}  required/>
                </FormControl>
                <FormControl>
                    <InputLabel>Phone Number</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="phone" value={phone}  required/>
                </FormControl>
                <Box my={3}>
                    <Button variant="contained" onClick={() => addAdminDetails() } color="primary" align="center">Add Admin</Button>
                    <Button onClick={()=> history.push("/alladmins")} variant="contained" color="secondary" align="center" style={{margin: '0px 20px'}}>Cancel</Button>
                </Box>
            </FormGroup>
            </Box>
        </Container>
    )
}


export default AddAdmin;