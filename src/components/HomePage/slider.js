import React from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import sli_5 from '../../images/sli_5.jpeg';
import sli_7 from '../../images/sli_7.jpeg';
import sli_4 from '../../images/sli_4.jpeg';




const Slider = () => {
    return(
        <Container>
            <Row>
                <Col md='12'>
                    <Carousel position='fixed'>
                        <Carousel.Item>
                            <img className='d-block w-100' src={sli_5} alt='calendar'/>
                            <Carousel.Caption>
                                <h3>Встигайте ще більше</h3>
                                <p>Витрачайте менше часу на планування дня і більше - на важливі справи. Новий Google Календарь допоможе вам в цьому !</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className='d-block w-100' src={sli_7} alt='calendar'/>
                            <Carousel.Caption>
                                <h3>Наглядний розклад</h3>
                                <p>Карти і картинки роблять ваш календарь більш яскравим та допомогають швидше орієнтуватись в власних планах.</p>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img className='d-block w-100' src={sli_4} alt='calendar'/>
                            <Carousel.Caption>
                                <h3>Плани на найближче майбутне</h3>
                                <p>Хочете побачить, що ви запланували на день, тиждень або місяць ? Просто оберіть потрібний режим календаря.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
};

export default Slider;