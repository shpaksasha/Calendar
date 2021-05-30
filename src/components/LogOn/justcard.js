import React, {useEffect, useState} from 'react';
import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({
    card: {
        margin: '30px 10px',
        width: '350px',
        height: '190px',
        position: 'relative',
        borderRadius: '5px',
        background: '#9fa8da'

    },
    title: {
        fontSize: '1.4em',
        color: '#6d4c41'
    }
}))

const Content = () => {

    const [list, setList] = useState([]);
    const classes = useStyles();


    list.map((item) => {
        return (
            <Grid item md={4}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} gutterBottom>
                            Basic Information
                        </Typography>
                        <Typography variant="caption" component="div">
                            <div key={item.id}><p>{item.name}</p><p>{item.email}</p><p>{item.message}</p></div>
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    })
};
export default Content;


examples


const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Hi, how are you ?')
        const pullLocal = () => {
            const raw = localStorage.getItem('emails');
            setAuth(JSON.parse(raw));
            raw.map((item) => {
                 item.name.JSON.parse(authorization.name)
                 item.email.JSON.parse(authorization.email)
                 item.message.JSON.parse(authorization.message)
             })
        }
        resolve(pullLocal)
    }, 2000)
});

prom.then(pull => {
    const prom2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Promise resolved')
            resolve(pull)

        }, 3000)
    })
})

const pullLocal = () => {
    const raw =localStorage.getItem('emails');
    setAuth(JSON.parse(raw));
}
