import React from 'react'
import './Sluzby.css'
import NavbarTwo from '../../assets/components/NavbarTwo/NavbarTwo'
import Place from '../../assets/components/Place/Place'
import { Container, Row, Col } from "react-bootstrap";
import Footer from '../../assets/components/Footer/Footer';
import Kys from '../../assets/components/Kys/Kys'
import fireinthehole from '../../assets/images/fireinthehole.jpg'
import odpad from '../../assets/images/odpad.png'
import lekarna from '../../assets/images/lekarna.png'
import ilovethemyounger from '../../assets/images/ilovethemyounger.jpg'


export default function Sluzby() {
  return (
    <div>
      <NavbarTwo></NavbarTwo>

      <Container>
        <Row>
          <Col>
            <div className='jcc'><Kys src={fireinthehole} title="Sbor hasičů" email="sborhasicu@bludov.cz" tel="725 168 943"></Kys></div>
          </Col>
          <Col>
            <div className='jcc'><Kys src={odpad} title="Odpadové hospodářství" email="Email: mesoh@bludov.cz" tel="762 481 674"></Kys></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='jcc'><Kys src={lekarna} title="Lékárna" email="Adresa: U Čapka 420" tel="777 318 696"></Kys></div>
          </Col>
          <Col>
            <div className='jcc'><Kys src={ilovethemyounger} title="Mateřská školka" email="Adresa: Igora Trefného 95" tel="773 420 696"></Kys></div>
          </Col>
        </Row>
      </Container>

      <div className='footermargin'>
      <Footer></Footer>
      </div>
    </div>

  )
}
