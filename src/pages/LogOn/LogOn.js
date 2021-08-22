import React, {useEffect, useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import {makeStyles} from '@material-ui/core/styles';
import {db} from '../../firebaseConfig';
import {Card, Grid, CardContent, Typography} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        width: '100%',
        height: 'auto',
        margin: 0,
        padding: '3rem 6.25rem',
    },

    form: {
        width: '400px',
        height: '480px',
        margin: '160px auto',
        position: 'relative',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        padding: '2em 2em',
    },
    control: {
        paddingBottom: '7px',
    },
    contact: {
        fontSize: '1.9em',
        fontFamily: 'Roboto',
        position: 'relative',
        padding: '1.7em 2em'
    },
    submit: {
        marginTop: '18px',
        position: 'relative',
        left: '50%',
        transform: 'translate(-50%, 0)'
    },
    card: {
        margin: '30px 10px',
        width: '350px',
        height: '190px',
        position: 'relative',
        borderRadius: '5px',
        background: '#9fa8da',
        padding: '5px'

    },
    title: {
        fontSize: '1.4em',
        color: '#6d4c41'
    },
    delete: {
        position: 'absolute',
        left: '50%',
        bottom:'20px',
        transform:'translate(100%, 0)'
    }
}));

const LogOn = () => {

    const classes = useStyles();
    const [authorization, setAuth] = useState({})
    const [list, setList] = useState([])

    const updateInput = e => {
        setAuth({
            ...authorization,
            [e.target.name]: e.target.value,
        })
        console.log(authorization)
        console.log(e.target.name)
    }
    const handleSubmit = event => {
        event.preventDefault()
        sendEmail()
        setAuth({
            name: '',
            email: '',
            message: '',
        })
    }
    const sendEmail = () => {
        db.collection('emails').add({
            name: authorization.name,
            email: authorization.email,
            message: authorization.message,
            time: new Date(),
        })
            .catch(error => {
                console.log(error)
            })
    }

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
                    if (change.type === 'removed'){
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


    const card = list.map((item) => {
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
                                <Button variant='danger' className={classes.delete} onChange>Delete</Button>
                            </CardContent>
                        </Card>
                    </Grid>
            )
        }
    )
    return (
        <div className={classes.root}>
            <Grid container direction='row' md={12} justify='center' alignItems='center'>
                <Grid item md={12}>
            <Form className={classes.form} onSubmit={handleSubmit}>
                <Form.Label className={classes.contact}>Contact Form</Form.Label>
                <Form.Group controlId='formName' className={classes.control}>
                    <Form.Control style={{fontFamily: 'Roboto'}} type='text' name='name' value={authorization.name}
                                  onChange={updateInput} placeholder='Name'/>
                </Form.Group>

                <Form.Group controlId='formEmail' className={classes.control}>
                    <Form.Control style={{fontFamily: 'Roboto'}} type='email' name='email' value={authorization.email}
                                  onChange={updateInput} placeholder='Email'/>
                </Form.Group>

                <Form.Group controlId='Message'>
                    <Form.Control style={{fontFamily: 'Roboto'}} type='text' name='message'
                                  value={authorization.message}
                                  onChange={updateInput} placeholder='Message'/>
                </Form.Group>

                <Button className={classes.submit} variant='dark' type='submit'>
                    Submit
                </Button>
            </Form>
                </Grid>
                <Grid container direction='row' md={12}>
                    {card}
                </Grid>
            </Grid>
        </div>
    )
};

export default LogOn;
