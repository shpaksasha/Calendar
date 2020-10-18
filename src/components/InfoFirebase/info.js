import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Card, CardContent, Typography, CardActions, Button} from '@material-ui/core';
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const SimpleCard = () => {
    const classes = useStyles();

    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Word of the Day
                </Typography>
                <Typography variant="h5" component="h2">
                    be{bull}nev{bull}o{bull}lent
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    adjective
                </Typography>
                <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon/>}
                >
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default SimpleCard;
