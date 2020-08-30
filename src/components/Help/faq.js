import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import sky from '../../images/sky.jpeg';

const useStyles = makeStyles(theme => ({
    body: {
        // backgroundImage:{sky},
        backgroundImage: `url('${sky}')`,
    },

    root: {
        // backgroundImage: `url('${sky}')`,
        width: '100%',
        margin: 0,
        padding: 0,
    },

    heading: {
        fontSize:'1.2em',
        fontWeight: 'normal',
        color:'#ffffff'
    },
    summary: {
        background: 'rgba(0,0,0, .4)',
        // background: 'hsla(40, 50%, 10%, .20)',
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
                    <AccordionDetails>
                        <Typography>
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
                    <AccordionDetails>
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
                    <AccordionDetails>
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