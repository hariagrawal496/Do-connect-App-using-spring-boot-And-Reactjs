import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { getallUserqa } from '../../service/UserQAapi';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    table: {
        width: '80%',
        margin: '50px 100px 100px 140px',
    },
    thead: {
        '& > *': {
            background: '#000000',
            color: '#FFFFFF',
            fontSize: '16px'
        }
    },
    trow: {
        '& > *': {
            fontSize: '16px'
        }
    }
})

const UserAllQAs = () => {

    const classes = useStyle();

    const [userqa, setqa] = useState([]);
    useEffect(() => {
        getUserQA();
    }, [])

    const getUserQA = async () => {
        const response = await getallUserqa();  //getting the details of all the menu items
        console.log(response);
        setqa(response.data);
    }

    return (
        //displaying the menu items
        <Table className={classes.table}>
            
            <TableHead>
                <TableRow className={classes.thead}>
                  
                    <TableCell>Questions</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell style={{textAlign:'center'}}>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    userqa.map((data,index) => (
                        <TableRow className={classes.trow} key={index}>
                        
                            <TableCell>{data.question}</TableCell>
                            <TableCell style={{textAlign:'center'}}>{data.status}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" style={{ textAlign:'center' }} component={Link} to={`/usertoadminupdate/${data.id}`}>Update the status</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default UserAllQAs;
