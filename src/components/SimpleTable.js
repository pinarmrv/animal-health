import React, {Component, useEffect, useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ReorderIcon from '@material-ui/icons/Reorder';
import HealthService from "../services/HealthService";
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment';
import SimpleDialog from './SimpleDialog';

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 650,
        marginTop: theme.spacing(2),
    },
}));

export default function SimpleTable(props) {
    const classes = useStyles();
    const [rows, setRows] = React.useState([]);
    const filterCriteria =  props.criteria;
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState();

    useEffect(()=>{
        HealthService.getHealthData(filterCriteria, selectedValue)
            .then(response => {
                let data_arr = [];
                    response.map((data) => {
                        let value = data.value;
                        let unit = data.unit;
                        let date = moment(data.timestamp).format('DD-MM-YYYY');
                        data_arr.push({
                            value: value,
                            unit: unit,
                            date: date,
                        });
                    });
                setRows(data_arr);
            });
    },[filterCriteria, selectedValue]);
    
    function handleDialogOpen() {
        setOpen(true);
    }

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <TableContainer>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Value</TableCell>
                        <TableCell align="right">Unit</TableCell>
                        <TableCell align="right">Last Update <IconButton onClick={handleDialogOpen} > <ReorderIcon/> </IconButton> </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    { (rows !== undefined || rows.length > 1) ?
                        rows.map((row) => (
                        <TableRow key={row.name}>
                        <TableCell align="right">{row.value}</TableCell>
                        <TableCell align="right">{row.unit}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                        </TableRow>
                        )) : <TableRow/>
                       }
                </TableBody>
            </Table>
            <SimpleDialog onClose={handleClose} open={open} selectedValue={selectedValue}/>
        </TableContainer>
    );

}

