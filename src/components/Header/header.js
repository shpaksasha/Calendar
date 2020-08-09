import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Navbar, Container, Nav, Form, FormControl, Button, NavDropdown}from 'react-bootstrap';
import logo from '../../images/calendar_3.jpg'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FilterIcon from '@material-ui/icons/Filter';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import ShowChartIcon from '@material-ui/icons/ShowChart';

const useStyles = makeStyles(theme => ({
    addIcon: {
        color: '#4791db',
        paddingRight: '7px'
    },
    block:{
        color: 'red',
        '&:hover':{
            backgroundColor: 'yellow'
        }
    }
}));

const Header = () =>{
    const classes =useStyles();
    return(
        <Navbar collapseOnSelect expand='md' bg='light' variant='light' fixed='top'>
            <Container>
                <Navbar.Brand href='/'>
                    <img
                        src={logo}
                        height='40'
                        width='40'
                        alt='brand'
                        className='d-inline-block align-content-center mr-2'
                    />
                    Calendar
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'className={classes.block}>
                    <Nav className='m-auto pr-md-2'>
                        <NavDropdown title='Графік' id='basic-nav-dropdown'>
                            <NavDropdown.Item href=''><AddCircleOutlineIcon className={classes.addIcon}/>Створити графік</NavDropdown.Item>
                            <NavDropdown.Item href=''><FilterIcon className={classes.addIcon}/>Порівняти графіки</NavDropdown.Item>
                            <NavDropdown.Item href=''><DynamicFeedIcon className={classes.addIcon}/>Всі графіки</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href=''><ShowChartIcon className={classes.addIcon}/>Статистика</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='/content'>Запросити друзів</Nav.Link>
                        <Nav.Link href='/faq'>Підтримка</Nav.Link>
                        <Nav.Link href='/about'>Налаштування</Nav.Link>
                        <Nav.Link href='/football'>Увійти</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
};

export default Header;