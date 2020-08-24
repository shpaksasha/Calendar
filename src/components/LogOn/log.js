import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import {makeStyles} from '@material-ui/core/styles';
import { db } from '../../firebase/firebaseConfig';
import Axios from 'axios';


const useStyles = makeStyles(theme => ({
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
    }
}));

const LogOn = () => {
    const classes = useStyles();

    const [authorization, setAuth] = useState({})

    const updateInput = event => {
        setAuth({
            ...authorization,
            [event.target.name]: event.target.value,
        })
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
        Axios.post(
            // 'https://us-central1-your-app-name.cloudfunctions.net/submit',
            // 'https://my-calendar-ab740.web.app',
            'https://console.firebase.google.com/project/my-calendar-ab740/overview',
            authorization
        )
            .then(res => {
                db.collection('emails').add ({
                    name: authorization.name,
                    email: authorization.email,
                    message: authorization.message,
                    time: new Date(),
                })
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <Form className={classes.form} onSubmit={handleSubmit}>
            <Form.Label className={classes.contact}>Contact Form</Form.Label>
            <Form.Group controlId='formName' className={classes.control}>
                <Form.Control style={{fontFamily: 'Roboto'}} type='name' placeholder='Name' value={authorization.name} onChange={updateInput}/>
            </Form.Group>

            <Form.Group controlId='formEmail' className={classes.control}>
                <Form.Control style={{fontFamily: 'Roboto'}} type='email' placeholder='Email' value={authorization.email} onChange={updateInput}/>
            </Form.Group>

            <Form.Group controlId='Message'>
                <Form.Control style={{fontFamily: 'Roboto'}} as='textarea' type='message' placeholder='Message' value={authorization.message} onChange={updateInput}/>
            </Form.Group>

            <Button className={classes.submit} variant='dark' type='submit'>
                Submit
            </Button>
        </Form>
    )
};

export default LogOn;