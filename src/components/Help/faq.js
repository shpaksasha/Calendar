import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import sky from '../../images/sky.jpeg';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url('${sky}')`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height:'100vh',
        margin: 0,
        padding: 0,
    },
    heading: {
        fontSize:'1.2em',
        fontWeight: 'normal',
        color:'#ffffff'
    },
    summary: {
        background: 'rgba(0,0,0, .3)',
        transition: 'all .3s ease-in'
    },
    details: {
        color: '#ffffff',
        background:'rgba(0,0,0, .4)',
        wordSpacing: '2px',
        transition: 'all .6s ease-in',
    },
    text: {

        visibility: 'visible',
        opacity: 1,
        transition: 'all .4s ease-in',
    }
}));

const Faq = () => {
    const classes = useStyles();

    return (
            <div className={classes.root}>
                <Accordion disableSpacing={true}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{'color': '#ffffff'}}/>}
                        id="panel1a-header"
                        className={classes.summary}
                    >
                        <Typography className={classes.heading}>Accordion 1</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                        <Typography className={classes.text}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{'color': '#ffffff'}}/>}
                        id="panel2a-header"
                        className={classes.summary}
                    >
                        <Typography className={classes.heading}>Accordion 2</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon style={{'color': '#ffffff'}}/>}
                        id="panel3a-header"
                        className={classes.summary}
                    >
                        <Typography className={classes.heading}>Accordion 3</Typography>
                    </AccordionSummary>
                    <AccordionDetails className={classes.details}>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget.
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
    )
}

export default Faq;