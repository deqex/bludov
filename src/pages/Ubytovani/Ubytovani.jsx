import React from 'react'
import NavbarTwo from '../../assets/components/NavbarTwo/NavbarTwo'
import Heading from '../../assets/components/Heading/Heading'
import Footer from '../../assets/components/Footer/Footer'
import Kys from '../../assets/components/Kys/Kys'
import { Container, Row, Col } from "react-bootstrap";

export default function Ubytovani() {
  return (
    <>
      <NavbarTwo></NavbarTwo>
      <Heading text="Ubytovaní"></Heading>

      <Container>
        <Row>
          <Col>
            <Kys title="Habermannova vila" email="Adresa: Kulatov 535" tel="725 168 943"></Kys>
          </Col>
          <Col>
            <Kys title="Penzion Bludoveček" email="Adresa: Vyhrerni 777" tel="762 481 674"></Kys>
          </Col>
        </Row>
        <Row>
          <Col>
            <Kys title="Chata Vlčák" email="Adresa: U Stromu 420" tel="777 318 696"></Kys>
          </Col>
          <Col>
            <Kys title="Restaurace U Kláry" email="Adresa: Jana Žižky 905" tel="773 420 696"></Kys>
          </Col>
        </Row>
      </Container>

      <div className='footermargin'>
      <Footer></Footer>
      </div>
    </>
  )
}
