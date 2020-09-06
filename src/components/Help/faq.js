import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import sky from '../../images/sky.jpeg';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `url('${sky}')`,
        backgroundPosition: 'bottom',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
    },
    heading: {
        fontSize: '1.2em',
        fontWeight: 'normal',
        color: '#ffffff'
    },
    summary: {
        background: 'rgba(0,0,0, .3)',
        transition: 'all .3s ease-in'
    },
    details: {
        color: '#ffffff',
        background: 'rgba(0,0,0, .4)',
        wordSpacing: '2px',
        transition: 'all .6s ease-in',
    },
    text: {
        transition: 'all .6s ease-in',
        '& text:hover': {
            opacity: 1,
            transition: 'all .6s ease-in',
        },
        '& p': {
            textIndent: '1.1em'
        }
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
                    <Typography className={classes.heading}>Как раздел FAQ помогает в продвижении сайта?</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <Typography className={classes.text}>
                        <p>Обычно страница FAQ создается для ответов на вопросы. Чтобы закрыть возражения клиентов и
                            частично разгрузить сотрудников поддержки. Вторая причина, почему создают страницу FAQ – для
                            улучшения результатов продвижения сайта. Как это работает?</p>
                        <p>Отвечая, вы ссылаетесь на определенные страницы. Это улучшает поведенческие факторы и,
                            соответственно, позиции в выдаче.</p>
                        <p>Ответы могут высвечиваться и в Google/Яндексе. Часто пользователи ищут информацию, которая
                            относится к вашей сфере, а не к компании. Но в итоге попадают на сайт и, возможно,
                            становятся клиентами. Для этого нужно лишь грамотно оптимизировать контент или посадочные
                            страницы под ключевые слова.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{'color': '#ffffff'}}/>}
                    id="panel2a-header"
                    className={classes.summary}
                >
                    <Typography className={classes.heading}>Где опубликовать раздел FAQ?</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <Typography className={classes.text}>
                        <p>Зависит от специфики бизнеса. Если делаете акцент на клиентскую поддержку – опубликуйте
                            раздел FAQ на страницу, где размещены контакты для связи с консультантами. Пользователи
                            сначала прочитают ответы, а потом, если не найдут нужную информацию, позвонят менеджерам.
                            Подробнее: https://cityhost.ua/blog/chto-takoe-faq-i-zachem-on-nuzhen.html</p>
                        <p>Если занимаетесь продажей товаров – раздел FAQ размещается в навигации сайта (в главном
                            меню). Если главное меню заполнено, ссылка на страницу FAQ размещается в футере (нижней
                            части сайта).</p>
                        <p>Можно опубликовать ее и на товарных страничках. Например, сделав частью описаний или
                            разместить в конце (после отзывов покупателей).</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{'color': '#ffffff'}}/>}
                    id="panel3a-header"
                    className={classes.summary}
                >
                    <Typography className={classes.heading}>Как оформить страницу FAQ?</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                    <Typography className={classes.text}>
                        <p>Оформление страницы FAQ выполняется на ваше усмотрение. Готовых шаблонов нет, и владельцы
                            сайтов самостоятельно выбирают перечень вопросов. Но есть универсальные, подходящие для
                            любых сфер:</p>
                        <ul>
                            <li>как оформить возврат товара?</li>
                            <li>какие варианты доставки доступны?</li>
                            <li>как правильно выбрать размер?</li>
                            <li>я получил товар с дефектом: что делать?</li>
                        </ul>
                        <p>Когда ответите на стандартные вопросы – переходите к детальным, касающимся вашего бизнеса.
                            Возьмите их из входящих писем и тикетов поддержки.</p>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
}

export default Faq;