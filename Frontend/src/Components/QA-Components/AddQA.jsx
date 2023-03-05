import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Input, Box, FormGroup, Button } from '@material-ui/core';
import { addqa } from '../../service/QAapi';
import { useHistory } from 'react-router-dom';

const initialValue = {  //declaring the item details
    question: "",
   
}

const AddQA = () => {          //method to add menu items

    const [qa, setqa] = useState(initialValue);
    const { question } = qa;   //defining the properties of each item

    const history = useHistory();

    const onValueChange = (e) => {
        setqa({ ...qa, [e.target.name]: e.target.value });
        console.log(qa);
    }

    const addQADetails = async () => {
        await addqa(qa);
        alert("Question with answer is added succeessfully")
        history.push('/qa');
    }

    return (

        //form to add menu items

        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center">Add Question Details</Typography>
                <FormGroup>
                <FormControl>
                    <InputLabel>Question</InputLabel>
                    <Input onChange={(e) => onValueChange(e)} name="question" value={question} />
                </FormControl>
                    <Box my={3}>
                        <Button variant="contained" onClick={() => addQADetails()} color="primary" align="center">Add QA</Button>
                        <Button onClick={() => history.push("/qa")} variant="contained" color="secondary" align="center" style={{ margin: '0px 20px' }}>Cancel</Button>
                    </Box>
                </FormGroup>
            </Box>
        </Container>
    )
}


export default AddQA;