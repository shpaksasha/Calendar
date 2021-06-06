import React from 'react';
import {NavLink} from 'react-router-dom';
import {Icon, Toolbar, Typography, makeStyles} from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        display: 'flex',
        backgroundColor: '#eceff1',
        padding: '0rem 6.25rem',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        position: 'sticky',
        top: 0,
        zIndex: 1,
    },

    eye: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },

    images: {
        width: '40px',
        height: '40px',
    },

    see: {
        width: '100%',
        color: '#212121',
        fontSize: '12px',
        letterSpacing: '120%',
        fontFamily: 'Montserrat',
        paddingLeft: '10px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '10px',
            paddingLeft: '8px'
        },
    },

    link: {
        position: 'relative',
        textDecoration: 'none',
        color: '#828282',
        fontSize: '16px',
        lineHeight: '24px',
        fontFamily: 'Roboto, sans-serif',
        '&:hover': {
            textDecoration: 'none',
            color: '#424242'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            lineHeight: '18px',
        },
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'space-between',
            fontSize: '25px',
            lineHeight: '45px',
        }
    },

    linkActive: {
        paddingBottom: '5px',
        borderBottom: '2px solid #37474f',
        color: '#37474f',
        fontSize: '16px',
        fontFamily: 'Roboto, sans-serif',
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px',
            lineHeight: '18px',
        },
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'space-between',
            fontSize: '25px',
            lineHeight: '45px'
        }
    },
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Toolbar className={classes.root}>
            <Typography>
                <Icon>
                    <NavLink className={classes.eye} to='/'>
                        <img className={classes.images} src='/icon/calendar.png' alt='calendar'/>
                        <span className={classes.see}><b>Google Calendar</b></span>
                    </NavLink>
                </Icon>
            </Typography>
            <Typography className={classes.title}>
                <NavLink exact={true} className={classes.link} activeClassName={classes.linkActive} to='/'>
                    Головна
                </NavLink>
            </Typography>
            <Typography className={classes.title}>
                <NavLink className={classes.link} activeClassName={classes.linkActive} to='/info'>
                    Сервіси
                </NavLink>
            </Typography>
            <Typography className={classes.title}>
                <NavLink className={classes.link} activeClassName={classes.linkActive} to='/faq'>
                    Допомога
                </NavLink>
            </Typography>
            <Typography className={classes.title}>
                <NavLink className={classes.link} activeClassName={classes.linkActive} to='/log'>
                    Вхід
                </NavLink>
            </Typography>
        </Toolbar>
    )
};

export default Header;
