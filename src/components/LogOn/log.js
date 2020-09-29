import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import {makeStyles} from '@material-ui/core/styles';
import {db} from '../../firebase/firebaseConfig';
import {Container, CircularProgress, CardContent, Typography, CardActions, Card} from '@material-ui/core';



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
    },
    loading: {
        display: 'flex',
        position: 'relative',
        margin: '0 auto',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '350px',
    }
}));

const LogOn = () => {
    const classes = useStyles();
    const [authorization, setAuth] = useState({})

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
    const prom = new Promise( (resolve,reject) => {
        setTimeout(() => {
            console.log('Hi, how are you ?')
            const pullLocal = () => {
                const raw =localStorage.getItem('emails');
                setAuth(JSON.parse(raw));
            }
            resolve(pullLocal)
        }, 2000)
    });

    prom.then(pull => {
        const prom2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Promise resolved', pull)
                resolve(pull)
                return(
                    {setAuth}
                )
            },3000)
        })
    })

    // const pullLocal = () => {
    //     const raw =localStorage.getItem('emails');
    //     setAuth(JSON.parse(raw));
    // }


    // const pullBase = () =>{
    //     const raw = db.collection('emails').getItem(JSON.stringify(area))
    //     raw.map((item)=>{
    //         return <div>
    //             `${item.name}: ${item.email}: ${item.message}`
    //         </div>
    //     })
    //     }


    // function renderLoading() {
    //     return (
    //         <Container maxWidth='md' component='div' fixed className={classes.loading}>
    //             <CircularProgress color="secondary" size={57}/>
    //         </Container>
    //     )
    // }



    return (
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
                <Form.Control style={{fontFamily: 'Roboto'}} type='text' name='message' value={authorization.message}
                              onChange={updateInput} placeholder='Message'/>
            </Form.Group>

            <Button className={classes.submit} variant='dark' type='submit' onSubmit={prom}>
                Submit
            </Button>
        </Form>
    )
};

export default LogOn;