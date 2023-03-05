import React, { useEffect, useState } from 'react';
import { Container, Typography, FormControl, Input, Box, FormGroup, Button,FormLabel } from '@material-ui/core';

import { getallChats,addChat } from '../../../service/userChatApi';

//import { useParams } from 'react-router-dom';
import './Style.css'

const Chat = () => {  

    const [chat, setChat] = useState('');//method to edit the menu details
    const { username, message, image } = chat;
  //  const { id } = useParams();   //identifying the menu items by id


  const userName = localStorage.getItem('name');
   
    const onValueChange = (e) => {
        setChat({ ...chat, [e.target.name]: e.target.value });
    }
    
    const addAnswerData = async () => {

        const newchat ={
            username : userName ,
            message:chat.message,
            image:chat.image
        }

        await addChat(newchat);
        alert("chat is added successfully")
    }

   
//---------------------

const [allChat, setAllChat] = useState([]);
    
useEffect(() => {
    loadChatData();
}, [])

const loadChatData = async () => {
    const response = await getallChats();
    console.log(response);                   //displaying all users details
    setAllChat(response.data);
}

    return (

        //menu edit form
        <div>
<Container maxWidth="sm">
    <Box my={5}>
        <Typography variant="h5" align="center" >Chat Box</Typography>
                <br/><br/>

        <FormGroup>

            <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Input type='text' onChange={(e) => onValueChange(e)} name="message" value={message} />
            </FormControl>
        <br/>

             <FormControl>
                    <FormLabel>Image</FormLabel>
                    <Input type='text' onChange={(e) => onValueChange(e)} name="image" value={image} />
            </FormControl>
                        
            <Box my={3}>
                    <Button variant="contained" onClick={() => addAnswerData() } color="primary" align="center">Post</Button>
            </Box>

        </FormGroup>
    </Box>
</Container>

          <div className='container mt-5'>
          <form >
              <table id="customers">
                <thead>
                        <tr> 
                            <th style={{'textAlign': 'center'}}>Username</th> 
                            <th style={{'textAlign': 'center'}}>Message</th>  
                            <th style={{'textAlign': 'center'}}>Image</th>               
                        </tr>
                </thead>
                <tbody>
                    {
                    
                         allChat.map((data,index) => (
                            <tr key={index}>
                                 <td style={{'textAlign': 'center'}}>{data.username}</td>
                                 <td style={{'textAlign': 'center'}}>{data.message}</td>
                                 <td style={{'textAlign': 'center'}}>
                                    <img style={{ 'borderRadius': '80px',height:'30px',width:'40px'}} src={data.image} alt='Not added' />
                                </td>
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


export default Chat;