import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import SimpleTable from './SimpleTable';

const useStyles = makeStyles((theme) => ({

    paperTop: {
        marginTop: theme.spacing(15),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background:'#f1fffb',
        height: "100%",
    },
    list: {
        marginLeft: theme.spacing(10),
    },

}));

function HealthPage() {
    const classes = useStyles();
    const [active, setActive] = React.useState("w");

    const handleWeightClick = () => {
        setActive("w")
    };

    const handlePulseClick = () => {
        setActive("p")
    };

    const handleTempClick = () => {
        setActive("t")
    };

    return (
        <div className={classes.paperTop}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <List className={classes.list}>
                            <ListItem button onClick={handleWeightClick}>
                                <KeyboardArrowRightIcon/>
                                Weight
                            </ListItem>
                            <ListItem button onClick={handlePulseClick}>
                                <KeyboardArrowRightIcon/>
                                Pulse
                            </ListItem>
                            <ListItem button onClick={handleTempClick}>
                                <KeyboardArrowRightIcon/>
                               Temperature
                            </ListItem>
                        </List>
                    </Paper>
                    <Divider orientation="vertical" flexItem />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                    <SimpleTable criteria = {active}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default HealthPage;