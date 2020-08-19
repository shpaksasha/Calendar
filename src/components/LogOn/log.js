import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    form: {
        width: '400px',
        height: '480px',
        margin: '180px auto',
        position: 'relative',
        backgroundColor:'#f5f5f5',
        borderRadius: '10px',
        padding: '2em 2em'
    },
    control: {
        paddingBottom:'7px',
    },
    contact: {
        fontSize: '1.9em',
        fontFamily: 'Roboto',
        position: 'relative',
        padding: '1.7em 2em'
    },
    submit: {
        margin: '0em auto'
    }
}));

const LogOn = () => {
    const classes = useStyles();
    return (
        <Form className={classes.form}>
            <Form.Label className={classes.contact}>Contact Form</Form.Label>
            <Form.Group controlId='formName' className={classes.control}>
                <Form.Control style={{fontFamily: 'Roboto'}} type='name' placeholder='Name'/>
            </Form.Group>

            <Form.Group controlId='formEmail' className={classes.control}>
                <Form.Control style={{fontFamily: 'Roboto'}} type='email' placeholder='Email'/>
            </Form.Group>

            <Form.Group controlId='Message'>
                <Form.Control style={{fontFamily: 'Roboto'}} as='textarea' type='message' placeholder='Message'/>
            </Form.Group>

            <Button className={classes.submit} class="btn btn-dark" variant='dark' type='submit'>
                Submit
            </Button>
        </Form>
    )
};

export default LogOn;