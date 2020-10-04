import React, {useEffect, useState} from 'react';
import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {db} from '../../firebase/firebaseConfig';

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
}));



export default function Content () {
    const classes = useStyles();

    const [list, setList] = useState([]);

    useEffect(() => {
        const observer = db.collection('emails').onSnapshot(querySnapshot => {
            querySnapshot.docChanges().forEach(change => {
                let data = {...change.doc.data(), 'id': change.doc.id};
                if (change.type === 'added') {
                    console.log('New record: ', data);
                    setList(prevState => {
                        return [...prevState, data]
                    })
                }
                if (change.type === 'modified') {
                    console.log('Modified record: ', data);
                    setList(prevState => prevState.map(item => {
                        if (data.id == item.id) {
                            return data
                        } else {
                            return item
                        }
                    }))
                }
                if (change.type === 'removed') {
                    console.log('Removed record: ', data);
                    setList(prevState => prevState.filter(item => {
                        let b = data.id != item.id;
                        console.log('Removed record filter: ', b, item, data);
                        return b
                    }))
                }
            })
        })
        return () => {
            observer()
        };
    }, []);


  const card  = list.map((item) => {
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
