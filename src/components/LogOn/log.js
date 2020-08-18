import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    form: {
        width: '400px',
        height: '400px',
        margin: '180px auto',
        position: 'relative'
    }
}));

const LogOn = () => {
    const classes = useStyles();
    return (
        <Form className={classes.form}>
            <Form.Group controlId='formName'>
                <Form.Label>Name</Form.Label>
                <Form.Control type='name' placeholder='Name'/>
            </Form.Group>

            <Form.Group controlId='formEmail'>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='Email'/>
            </Form.Group>

            <Form.Group controlId='Message'>
                <Form.Label>Message</Form.Label>
                <Form.Control as='textarea' type='message' placeholder='Message'/>
            </Form.Group>

            <Button variant="primary" type='submit'>
                Submit
            </Button>
        </Form>
    )
};

export default LogOn;