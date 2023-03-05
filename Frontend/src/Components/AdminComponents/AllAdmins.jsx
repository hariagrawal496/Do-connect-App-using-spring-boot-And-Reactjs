import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles, Button } from '@material-ui/core';
import { deleteAdmin, getallAdmins } from '../../service/adminApi';
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

const AllAdmins = () => {         //Method to display all users

    const classes = useStyle();

    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        getAdmins();
    }, [])

    const getAdmins = async () => {
        const response = await getallAdmins();
        console.log(response);                   //displaying all users details
        setAdmin(response.data);
    }

    const deleteData = async (id) => {
        await deleteAdmin(id);           //deleting the user by id
        getAdmins();
    }

    return (
        //displaying the all user data
        
        <Table className={classes.table}>
             <TableHead>
             <Button variant="contained" color="primary" style={{ margin: '0px 20px',marginBottom:'20%' }} component={Link} to={`/addadmins`}>Add Admin</Button>
                <TableRow className={classes.thead}>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            
            <TableBody>
            
                {
                     
                    admin.map((data ,index) => (
                        <TableRow className={classes.trow} key={index}>
                            <TableCell>{data.id}</TableCell>
                            <TableCell>{data.name}</TableCell>
                            <TableCell>{data.username}</TableCell>
                            <TableCell>{data.email}</TableCell>
                            <TableCell>{data.phone}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary" style={{ margin: '0px 20px' }} component={Link} to={`/editadmin/${data.id}`}>Edit</Button>
                                <Button variant="contained" color="secondary" style={{ margin: '0px 20px' }} onClick={() => deleteData(data.id)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllAdmins;
