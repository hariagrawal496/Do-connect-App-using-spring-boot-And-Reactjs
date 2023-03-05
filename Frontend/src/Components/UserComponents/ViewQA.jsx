import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, Input, Box, FormGroup, Button,FormLabel } from '@material-ui/core';
import { getQuestion } from '../../service/QAapi';
import { addAns,getallAns } from '../../service/AnsApi';
import { useParams } from 'react-router-dom';
import './viewQA.css'

const ViewQA = () => {  
    let finalQuestion;
    const [ans, setqa] = useState('');//method to edit the menu details
    const { question, answer, image } = ans;
    const { id } = useParams();   //identifying the menu items by id

    //---------------------
    useEffect(() => {
        loadqaData();
    }, []);


    const loadqaData = async () => {
        const response = await getQuestion(id);    //getting menu details by id
        setqa(response.data);
         finalQuestion = response.data.question ;
    }
//-------------------------------------
const onValueChange = (e) => {

    setqa({ ...ans, [e.target.name]: e.target.value });

}

const addAnswerData = async () => {

    await addAns(ans);

    alert("Answer is added succeessfully")

}

//---------------------

const [answers, setAnswers] = useState([]);

useEffect(() => {
getUsers();

}, [])


const getUsers = async () => {
const response = await getallAns();

for(let i=0 ; i<response.data.length ; i++)
{
    if(response.data[i].question === finalQuestion)
    {
        console.log(response.data[i]);
        setAnswers(response.data);
    }
}


}
   
//-------------

    return (

        //menu edit form
        <div>
        <Container maxWidth="sm">
            <Box my={5}>
                <Typography variant="h5" align="center" >See All the Answers of this Question</Typography>
                <br/><br/>

                <FormGroup>

                    <FormControl>
                        <FormLabel>Question</FormLabel>
                        <Input onChange={(e) => onValueChange(e)} name="question" value={question} disabled />
                    </FormControl>
                        <br/>

                    <FormControl>
                        <FormLabel>Answer</FormLabel>
                        <Input type='text' onChange={(e) => onValueChange(e)} name="answer" value={answer} />
                    </FormControl>
                        
                    <Box my={3}>
                        <Button variant="contained" onClick={() => addAnswerData()} color="primary" align="center">Add Answer</Button>
                    </Box>

                </FormGroup>
            </Box>
        </Container>

          <div className='container mt-5'>
          <form >
              <table id="customers">
                <thead>
                        <tr> 
                            <th style={{'textAlign': 'center'}}>Answer for this question</th>              
                        </tr>
                </thead>
                <tbody>
                    {
                         answers.map((data) => (
                            <tr>
                                 <td>{data.answer}</td>
                            </tr>
                         ))
                    }
                </tbody>
              </table>
        </form>
      </div> 
   </div>    
    )
}


export default ViewQA;