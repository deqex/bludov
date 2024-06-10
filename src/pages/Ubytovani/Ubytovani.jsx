import React from 'react'
import NavbarTwo from '../../assets/components/NavbarTwo/NavbarTwo'
import Heading from '../../assets/components/Heading/Heading'
import Footer from '../../assets/components/Footer/Footer'
import Kys from '../../assets/components/Kys/Kys'
import { Container, Row, Col } from "react-bootstrap";
import './Ubytovani.css'
import haber from '../../assets/images/haber.jpg'
import Bludovecek from '../../assets/images/Bludovecek.jpg'
import vlcak from '../../assets/images/vlcak.jpg'
import klara from '../../assets/images/klara.jpeg'



export default function Ubytovani() {
  return (
    <>
      <NavbarTwo></NavbarTwo>
      <div className='ubytovani-heading'>
        <Heading text="Ubytovaní"></Heading>
      </div>
      <Container>
        <Row>
          <Col>
            <div className='jcc'><Kys src={haber} title="Habermannova vila" email="Adresa: Kulatov 535" tel="725 168 943"></Kys></div>
          </Col>
          <Col>
            <div className='jcc'><Kys src={Bludovecek} title="Penzion Bludoveček" email="Adresa: Vyhrerni 777" tel="762 481 674"></Kys></div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='jcc'><Kys src={vlcak} title="Chata Vlčák" email="Adresa: U Stromu 420" tel="777 318 696"></Kys></div>
          </Col>
          <Col>
            <div className='jcc'><Kys src={klara} title="Restaurace U Kláry" email="Adresa: Jana Žižky 905" tel="773 420 696"></Kys></div>
          </Col>
        </Row>
      </Container>

      <div className='footermargin'>
        <Footer></Footer>
      </div>
    </>
  )
}
