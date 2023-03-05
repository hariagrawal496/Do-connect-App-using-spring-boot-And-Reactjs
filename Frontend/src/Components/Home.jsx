import React from 'react';

import { Container, Typography, Box } from '@material-ui/core';

import './Home.css'

const Home = () => {

    return (
        <Container  maxWidth="">
            <Box className='body1' my={0}>

                <Typography className='wrapper'>

                    <h2> Welcome To Do-Connect </h2>
                    <div className="box">

                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

                    </div>

                </Typography>

            </Box>

        </Container>

       

    )

}

export default Home;