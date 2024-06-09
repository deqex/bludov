import React from 'react'
import NavbarTwo from '../../assets/components/NavbarTwo/NavbarTwo'
import Heading from '../../assets/components/Heading/Heading'
import Thumbnail from '../../assets/components/Thumbnail/Thumbnail'
import { Container, Row, Col } from "react-bootstrap";
import Footer from '../../assets/components/Footer/Footer';

export default function Cile() {
  return (
    <>
        <NavbarTwo></NavbarTwo>

        <div className='cile-center'>
        <Heading text="Turistické cíle"></Heading>
        </div>
        
        <Container>
        <Row>
          <Col>
          <div className='jcc'><Thumbnail src="https://www.bludov.cz/admin/photos/ModuleTurist/14/kostelecek3-624a7e5c7a1ee.jpg" name="Kostel svatého Jiří "></Thumbnail></div>
          </Col>
          <Col>
          <div className='jcc'><Thumbnail src="https://www.bludov.cz/admin/photos/ModuleTurist/14/kostelecek3-624a7e5c7a1ee.jpg" name="Vyhlídka Brusná"></Thumbnail></div>
          </Col>
        </Row>
        <Row>
        <Col>
        <div className='jcc'><Thumbnail src="https://www.bludov.cz/admin/photos/ModuleTurist/14/kostelecek3-624a7e5c7a1ee.jpg" name="Zámek Bludov"></Thumbnail></div>
          </Col>
          <Col>
          <div className='jcc'><Thumbnail src="../../images/stezka.jpg" name="Stezka Bludovská stráň"></Thumbnail></div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
