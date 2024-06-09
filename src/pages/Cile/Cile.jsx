import React from 'react'
import NavbarTwo from '../../assets/components/NavbarTwo/NavbarTwo'
import Heading from '../../assets/components/Heading/Heading'
import Thumbnail from '../../assets/components/Thumbnail/Thumbnail'
import { Container, Row, Col } from "react-bootstrap";
import Footer from '../../assets/components/Footer/Footer';
import stezka from '../../assets/images/stezka.jpg'
import vyhlidka from '../../assets/images/01.jpg'
import zamecek from '../../assets/images/zamecek.jpg'


export default function Cile() {
  return (
    <>
        <NavbarTwo></NavbarTwo>
        <Heading text="Turistické cíle"></Heading>

        
        <Container>
    
        <Row>
          <Col>
          <div className='jcc'><Thumbnail src="https://www.bludov.cz/admin/photos/ModuleTurist/14/kostelecek3-624a7e5c7a1ee.jpg" name="Kostel svatého Jiří "></Thumbnail></div>
          </Col>
          <Col>
          <div className='jcc'><Thumbnail src={vyhlidka} name="Vyhlídka Brusná"></Thumbnail></div>
          </Col>
        </Row>
        <Row>
        <Col>
        <div className='jcc'><Thumbnail src={zamecek} name="Zámek Bludov"></Thumbnail></div>
          </Col>
          <Col>
          <div className='jcc'><Thumbnail src={stezka} name="Stezka Bludovská stráň"></Thumbnail></div>
          </Col>
        </Row>
      </Container>
      <div className='footermargin'>
      <Footer></Footer>
      </div>
    </>
  )
}
