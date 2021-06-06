import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import logo from '../../images/calendar.jpg'
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import FilterIcon from '@material-ui/icons/Filter';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import ShowChartIcon from '@material-ui/icons/ShowChart';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        display: 'flex',
        backgroundColor: '#eceff1',
        padding: '0rem 7.25rem',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        position: 'sticky',
        top: 0,
    },

    addIcon: {
        color: '#4791db',
        paddingRight: '7px',
    },

    block: {
        '&:hover': {
            backgroundColor: '#e3f2fd',
        }
    },

    header: {
        justifyContent: 'center',
        alignItems: 'center'
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Navbar className={classes.root} fixed='top' collapseOnSelect expand='md' bg='light' variant='light'>
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
                <Navbar.Collapse className={classes.header} id='responsive-navbar-nav'>
                    <Nav className='m-auto pr-md-auto'>
                        <Nav.Link href='/' className={classes.block}>Головна</Nav.Link>
                        <NavDropdown title='Графік' id='basic-nav-dropdown' className={classes.block}>
                            <NavDropdown.Item href='#'><AddCircleOutlineIcon className={classes.addIcon}/>Створити
                                графік</NavDropdown.Item>
                            <NavDropdown.Item href='#'><FilterIcon className={classes.addIcon}/>Порівняти
                                графіки</NavDropdown.Item>
                            <NavDropdown.Item href='#'><DynamicFeedIcon className={classes.addIcon}/>Всі
                                графіки</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href='#'>
                                <ShowChartIcon className={classes.addIcon}/>Статистика</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href='/content' className={classes.block}>Запросити друзів</Nav.Link>
                        <Nav.Link href='/info' className={classes.block}>Info</Nav.Link>
                        <Nav.Link href='/faq' className={classes.block}>Підтримка</Nav.Link>
                        <Nav.Link href='/log' className={classes.block}>Вхід</Nav.Link>
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
