import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { editUser, getallUser } from '../../service/userApi';
import { useHistory, useParams } from 'react-router-dom';

const initialValue = {
    name: "",                    //initializinig the values of user properties
    username: "",
    password: "",
    email: "",
    phone: "",
}

const EditUser = () => {  //method to edit the user details

    const [user, setUser] = useState(initialValue);
    const { name, username, password, email, phone } = user;

    const { id } = useParams();    //identifying the user by id

    useEffect(() => {
        loadUserData();
    },[]);

    const loadUserData = async () => {      //getting user details by id
        const response = await getallUser(id);
        setUser(response.data);
    }

    const history = useHistory();

    const onValueChange = (e) => {
        //  console.log(e);
        // console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    const editUserDetails = async () => {
        await editUser(id, user);
        history.push('/all');
    }

    return (

        //user details edit form
        
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center">Update User Details</Typography>
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
                        <Button variant="contained" onClick={() => editUserDetails()} color="primary" align="center">Update User</Button>
                        <Button onClick={() => history.push("/all")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>
    )
}


export default EditUser;