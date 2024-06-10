import React from 'react'
import NavbarTwo from '../../assets/components/NavbarTwo/NavbarTwo'
import Heading from '../../assets/components/Heading/Heading'
import Footer from '../../assets/components/Footer/Footer'
import { Container, Row, Col } from "react-bootstrap";
import './Restaurace.css'
import klara from '../../assets/images/klara.jpeg'
import Rest from '../../assets/components/Rest/Rest'

import restaurace from '../../assets/images/restaurace.jpg'
import hostinec from '../../assets/images/hostinec.jpeg'
import Bludovecek from '../../assets/images/Bludovecek.jpg'



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
          <div className='jcc'>
            <Rest image={restaurace} telefon={"Telefon: 734 268 838"} name={"Restaurace Bludovská"} email={"Adresa: Někdelov 182"}
              text={"otevírací dobu tady pls"}>
            </Rest>
          </div>
          </Col>
          <Col>
          <div className='jcc'>
            <Rest image={Bludovecek} telefon={"Telefon: 734 268 838"} name={"Restaurace Bludoveček"} email={"Adresa: Pánovská 404"}
              text={"otevírací dobu tady pls"}>
            </Rest>
            </div>
          </Col>
        </Row>
        <Row>
        <Col>
        <div className='jcc'>
            <Rest image={hostinec} telefon={"Telefon: 734 268 838"} name={"Hostinec Pod kostelem"} email={"Adresa: Vidělov 727"}
              text={"otevírací dobu tady pls"}>
            </Rest>
            </div>
          </Col>
          <Col>
          <div className='jcc'>
            <Rest image={klara} telefon={"Telefon: 734 268 838"} name={"Restaurace U Kláry"} email={"Adresa: Bludánská 624"}
              text={"otevírací dobu tady pls"}>
            </Rest>
            </div>
          </Col>
        </Row>
      </Container>

      <div className='footermargin'>
      <Footer></Footer>
      </div>
    </>
  )
}
