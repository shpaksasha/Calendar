import React from 'react';
import {Form, Button} from 'react-bootstrap';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme =>({

}));

const LogOn = () => {
    const classes = useStyles();
    return (
        <Form >
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

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
};

export default LogOn;