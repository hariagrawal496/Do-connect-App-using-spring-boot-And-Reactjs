import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addUserqa } from '../../service/UserQAapi';
import { useHistory } from 'react-router-dom';

const initialValue = {  //declaring the item details
    question: "",
}

const AddQA = () => {          //method to add menu items

    const [userqa, setUserqa] = useState(initialValue);
    const { question } = userqa;   //defining the properties of each item

    const history = useHistory();

    const onValueChange = (e) => {
        setUserqa({ ...userqa, [e.target.name]: e.target.value });
        console.log(userqa);
    }

    const addQADetails = async () => {
        await addUserqa(userqa);
        alert("Mail has been sended to the Admin for the Approval...!")
        history.push('/user');
    }

    return (

        //form to add menu items

        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center">Asked the New Question</Typography>
                <FormGroup>
                <FormControl>
                    <InputLabel>Enter the Question</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="question" value={question} />
                </FormControl>
                    <Box my={3}>
                        <Button variant="contained" onClick={() => addQADetails()} color="primary" align="center">Raised Question</Button>
                        <Button onClick={() => history.push("/user")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>
    )
}


export default AddQA;