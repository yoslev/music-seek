//import * as React from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React, {useState, useEffect} from "react";
import Grid from '@mui/material/Grid';

const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        width: 100,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));
/*

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
*/

/*
const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];
*/

const customTableStyle = {width: "50%", align: "center", padding: "5px"};
const customColumnStyle = {maxWidth: "5px", backgroundColor: "green", padding: "5px"};

export default function CustomizedTables() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        fetch("/api/v01/users")
            .then((res) => {
                return res.json()
            })
            .then((users) => {
                setUsers(users)
            });
    }, []);

    if (!users) {
        return ; //'Loading..'
    }

    return (
        <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 80}} style={customTableStyle} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell style={customColumnStyle}>Full Name</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((usr) =>
                                (
                                    <StyledTableRow key={usr.id}>
                                        <StyledTableCell component="th" scope="row">
                                            {usr.firstName} {usr.lastName}
                                        </StyledTableCell>
                                    </StyledTableRow>
                                )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}
//module.exports = CustomizedTables();