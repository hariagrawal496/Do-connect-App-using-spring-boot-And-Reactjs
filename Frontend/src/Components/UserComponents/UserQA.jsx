import React, { useEffect, useState } from 'react';
import { Table, TableCell, TableRow, TableHead, TableBody, makeStyles,Button } from '@material-ui/core';
import { getallqa } from '../../service/QAapi';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    table: {
        width: '75%',
        margin: '50px 80px 80px 140px',
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

const UserQA = () => {

    const classes = useStyle();

    // after writing in search
  const [search, setSearch] = useState('');

//  all data display on ui
    const [qa, setqa] = useState([]);

    useEffect(() => {
        loadgetQA();
    }, [])

    const loadgetQA = async () => {
        const response = await getallqa();  //getting menu details from the menu api for user
        console.log(response);
        setqa(response.data);
    }

    return (

        <div>
            
            <center>
             <br/>
            <input  className={classes.trow} type="search" placeholder="Search…"
              inputprops={{ 'aria-label': 'search' }} 
              style={{border:'2px solid red',padding:'15px'}}
              value={search} onChange = {(e) => setSearch(e.target.value)}/><br/>
            </center>

           <Table className={classes.table}>

            <TableHead>
                <TableRow className={classes.thead}>
                   <TableCell>Id</TableCell>
                    <TableCell style={{textAlign:"center"}}>Questions</TableCell>
                    <TableCell style={{textAlign:"center"}}>Action</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
            {
                qa.filter( x => x.question.toLowerCase()
                .includes(search.toLowerCase())).map( (data,index )=> {

                return(
                    <TableRow className={classes.trow} key={index} >
                         <TableCell>{data.id}</TableCell>
                         <TableCell style={{textAlign:"center"}}>{data.question}</TableCell>
                         <TableCell>
                                    <Button variant="contained" color="primary" style={{ margin: '0px 20px'}} component={Link} to={`/view/${data.id}`}>View</Button>
                         </TableCell>
                   </TableRow>
                )
                })                
            }
          </TableBody>

        </Table>

        </div>
    )
}

export default UserQA;


