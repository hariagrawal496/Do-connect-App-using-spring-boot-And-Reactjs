import React, { useState } from 'react';
import { Container, Typography, FormControl, Input, Box, FormGroup, Button, FormLabel } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure();

const initialValue = {
    username: "",
    password: ""
}


//used to check the login
function UserLogin() {
    const [db, setDb] = useState(initialValue);
    const history = useHistory();

    const onValueChange = (e) => {

        setDb({ ...db, [e.target.name]: e.target.value });
        console.log(db);
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


    //login method
    async function userPresent(data) {
        let check_data = await fetch("http://localhost:8082/api/users");
        let check = await check_data.json();
        let flag = false;
        console.log(check);

        for (let i = 0; i < check.length; i++)
         {
            if (check[i].username === data.username && check[i].password === data.password) 
            { //validating the user credentials
                flag = true;
                localStorage.setItem("name", check[i].username);
            }
        }

        if (flag === true) {
            notify("User Login success");  //alert after successful user login
            history.push("/user");
        }
        else {
            notify("Invalid username or password")  //alert after unsuccessful userlogin
        }
    }
    return (

        //User login form
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center">User Login</Typography>
                <br/>
                <FormGroup>
                    <FormControl>
                        <FormLabel> Enter the username</FormLabel>
                        <Input onChange={(e) => onValueChange(e)} name="username" value={db.username} />
                    </FormControl>
                    <br/>
                    <FormControl>
                    <FormLabel> Enter the password</FormLabel>
                        <Input  onChange={(e) => onValueChange(e)} name="password" value={db.password} type="password" />
                    </FormControl>
                    <Box my={3}>
                        <Button variant="contained" onClick={() => userPresent(db)} color="primary" align="center">Login</Button>
                        <Button onClick={() => history.push("/user")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                        <br></br><br></br>
                        If Don't have credential please click here <Button variant="contained" onClick={() => history.push("/user-register")} color="primary" align="center">Registration</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>

    )

}
export default UserLogin;