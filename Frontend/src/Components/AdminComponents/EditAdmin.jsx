import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { editAdmin, getallAdmin } from '../../service/adminApi';
import { useHistory, useParams } from 'react-router-dom';

 //initializinig the values of user properties
const initialValue = {
    name: "",                   
    username: "",
    password: "",
    email: "",
    phone: "",
}

const EditAdmin = () => {  //method to edit the user details

    const [admin, setAdmin] = useState(initialValue);
    const { name, username, password, email, phone } = admin;

    const { id } = useParams();    //identifying the user by id

    useEffect(() => {
        loadAdminData();
    },[]);

    const loadAdminData = async () => {      //getting user details by id
        const response = await getallAdmin(id);
        console.log(response.data);
        setAdmin(response.data);
    }

    const history = useHistory();

    const onValueChange = (e) => {
        
        setAdmin({ ...admin, [e.target.name]: e.target.value });
        console.log(admin);
    }

    const editAdminDetails = async () => {
        await editAdmin(id, admin);
        history.push('/alladmins');
    }

    return (

        //user details edit form
        
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center">Update Admin Details</Typography>
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
                        <Button variant="contained" onClick={() => editAdminDetails()} color="primary" align="center">Update Admin</Button>
                        <Button onClick={() => history.push("/alladmins")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>
    )
}


export default EditAdmin;