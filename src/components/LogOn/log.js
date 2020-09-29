import React, {useState, useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import {makeStyles} from '@material-ui/core/styles';
import {db} from '../../firebase/firebaseConfig';
import {Card, CardActions, CardContent, Typography} from '@material-ui/core';


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
    },
    root: {
        marginTop: '200px',
        minWidth: '100%',
        position: 'relative'

    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
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
                let data = {...change.doc.data(),'id': change.doc.id};
                if (change.type === 'added') {
                                console.log('New record: ', data);
                                setList(prevState => {
                                   return [...prevState, data]
                                })
                            }
                            if (change.type === 'modified') {
                                console.log('Modified record: ', data);
                                setList(prevState => prevState.map(item=>{
                                    if (data.id == item.id) {
                                        return data
                                    }
                                    else {
                                        return item
                                    }
                                }))
                            }
                            if (change.type === 'removed') {
                                console.log('Removed record: ', data);
                                setList(prevState =>prevState.filter(item => {
                                    let b = data.id != item.id;
                                    console.log('Removed record filter: ', b, item, data);
                                    return  b

                                }))
                            }
                })
            }
            )
        return () => {
            observer()
        };
    }, []);





    // const prom = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         console.log('Hi, how are you ?')
    //         const pullLocal = () => {
    //             const raw = localStorage.getItem('emails');
    //             setAuth(JSON.parse(raw));
    //            // raw.map((item) => {
    //            //      item.name.JSON.parse(authorization.name)
    //            //      item.email.JSON.parse(authorization.email)
    //            //      item.message.JSON.parse(authorization.message)
    //            //  })
    //         }
    //         resolve(pullLocal)
    //     }, 2000)
    // });
    //
    // prom.then(pull => {
    //     const prom2 = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             console.log('Promise resolved')
    //             resolve(pull)
    //
    //         }, 3000)
    //     })
    // })

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

    // let p = document.querySelector('.block')
    const p = list.map((item) =>
        <li key={item.id}><p>{item.email}</p><p>{item.name}</p><p>{item.message}</p></li>
    )
    return (
        <div>
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
            <ul>
                {p}
            </ul>
{/*            <Card className={classes.root}>*/}
{/*                <CardContent>*/}
{/*                    <Typography className={classes.title} color="textSecondary" gutterBottom>*/}
{/*                        Word of the Day*/}
{/*                    </Typography>*/}
{/*                    <Typography variant="h5" component="h2">*/}
{/*                    </Typography>*/}
{/*                    <Typography className={classes.pos} color="textSecondary">*/}
{/*                        <div className='block'>*/}
{/*<p></p>*/}
{/*                        </div>*/}
{/*                    </Typography>*/}
{/*                </CardContent>*/}
{/*                <CardActions>*/}
{/*                    <Button size="small">Learn More</Button>*/}
{/*                </CardActions>*/}
{/*            </Card>*/}
        </div>
    )
};

export default LogOn;