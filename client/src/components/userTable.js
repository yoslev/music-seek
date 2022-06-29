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
import {getAgeClassById, getGenreById, getInstrumentById, getPlayerLevelById, getRegionById} from "../entities/enums";

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

const customTableStyle = {width: "100%", align: "left", padding: "5px", margin: "0 auto"};
const customColumnStyle = {maxWidth: "100px", backgroundColor: "green", padding: "5px"};


export default function UserTables() {
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
        <Grid spacing={1} container item xs={12} >
            <TableContainer component={Paper}>
                <Table style={customTableStyle} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell style={customColumnStyle}>Full Name</StyledTableCell>
                            <StyledTableCell style={customColumnStyle} align="left">email</StyledTableCell>
                            <StyledTableCell style={customColumnStyle} align="left">Main Instrument</StyledTableCell>
                            <StyledTableCell style={customColumnStyle} align="left">Level</StyledTableCell>
                            <StyledTableCell style={customColumnStyle} align="left">2nd Instrument</StyledTableCell>
                            <StyledTableCell style={customColumnStyle} align="left">Level</StyledTableCell>
                            <StyledTableCell style={customColumnStyle} align="left">Genre</StyledTableCell>
                            <StyledTableCell style={customColumnStyle} align="left">Region</StyledTableCell>
                            <StyledTableCell style={customColumnStyle} align="left">Age Class</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody style={{width: 100}}>
                        {users.map((usr) =>
                                (
                                    <StyledTableRow key={usr.id}>
                                        <StyledTableCell component="th" scope="row" onClick={() => console.log(usr.id)}>
                                            {usr.firstName} {usr.lastName}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{usr.email}</StyledTableCell>
                                        <StyledTableCell align="left">{getInstrumentById(usr.mainPayingInstrumentId)}</StyledTableCell>
                                        <StyledTableCell align="left">{getPlayerLevelById(usr.mainPayingInstrumentLevel)}</StyledTableCell>
                                        <StyledTableCell align="left">{getInstrumentById(usr.secondPayingInstrumentId)}</StyledTableCell>
                                        <StyledTableCell align="left">{getPlayerLevelById(usr.secondPayingInstrumentLevel)}</StyledTableCell>

                                        <StyledTableCell align="left">{getGenreById(usr.musicGenres)}</StyledTableCell>
                                        <StyledTableCell align="left">{getRegionById(usr.region)}</StyledTableCell>
                                        <StyledTableCell align="left">{getAgeClassById(usr.ageClass)}</StyledTableCell>
                                    </StyledTableRow>
                                )
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
    );
}
