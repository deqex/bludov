import React from 'react'
import NavbarTwo from '../../assets/components/NavbarTwo/NavbarTwo'
import Heading from '../../assets/components/Heading/Heading'
import Footer from '../../assets/components/Footer/Footer'
import { Container, Row, Col } from "react-bootstrap";
import './Restaurace.css'
import klara from '../../assets/images/klara.jpeg'
import Place from '../../assets/components/Place/Place'



export default function Restaurace() {
  return (
    <>
      <NavbarTwo></NavbarTwo>
      <div className='restaurace-heading'>
      <Heading text="Restaurace a hospody"></Heading>
      </div>
      <Container>
        <Row>
          <Col>
            <Place image={klara} telefon={"Telefon: 734 268 838"} name={"Dětské hřiště"} email={"Adresa: Někdelov 182"}
              text={"otevírací dobu tady pls"}>
            </Place>
          </Col>
          <Col>
            <Place image={klara} telefon={"Telefon: 734 268 838"} name={"Dětské hřiště"} email={"Adresa: Pánovská 404"}
              text={"otevírací dobu tady pls"}>
            </Place>
          </Col>
        </Row>
        <Row>
        <Col>
            <Place image={klara} telefon={"Telefon: 734 268 838"} name={"Dětské hřiště"} email={"Adresa: Vidělov 727"}
              text={"otevírací dobu tady pls"}>
            </Place>
          </Col>
          <Col>
            <Place image={klara} telefon={"Telefon: 734 268 838"} name={"Dětské hřiště"} email={"Adresa: Bludánská 624"}
              text={"otevírací dobu tady pls"}>
            </Place>
          </Col>
        </Row>
      </Container>

      <div className='footermargin'>
      <Footer></Footer>
      </div>
    </>
  )
}
