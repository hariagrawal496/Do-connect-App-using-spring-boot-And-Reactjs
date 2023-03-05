import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { deleteqa, getallqa } from '../../service/QAapi';
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

const AllQAs = () => {

    const classes = useStyle();

    const [qa, setqa] = useState([]);
    
    useEffect(() => {
        getQA();
    }, [])

    const getQA = async () => {
        const response = await getallqa();  //getting the details of all the menu items
        console.log(response);
        setqa(response.data);
    }

    const deleteData = async (id) => {  //deleteing the item from the menu by its id
        await deleteqa(id);
        getQA();
    }

    return (
        //displaying the menu items
        <Table className={classes.table}>
            
            <TableHead>
            <Button variant="contained" color="primary" style={{ margin: '0px 20px' ,marginBottom:'20%'  }} component={Link} to={`/addqa`}>Add Question</Button>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Questions</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    qa.map((data,index) => (
                        <TableRow className={classes.trow} key={index}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.question}</TableCell>
                            <TableCell>

                                <Button variant="contained" color="primary" style={{ margin: '0px 20px' }} component={Link} to={`/update/${data.id}`}>Edit</Button>

                                <Button variant="contained" color="secondary" style={{ margin: '0px 20px' }} onClick={() => deleteData(data.id)}>Delete</Button>

                                <Button variant="contained" color="primary" style={{ margin: '0px 20px' }} component={Link} to={`/adminview/${data.id}`}>View</Button>

                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllQAs;
