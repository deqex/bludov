import React from 'react'
import NavbarTwo from '../../assets/components/NavbarTwo/NavbarTwo';
import '../Foto/Foto.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Fotkaa from '../../assets/components/Fotkaa/Fotkaa';

export default function Foto() {
  return (
    <div>
      <NavbarTwo></NavbarTwo>

      <Container>
        <Row className='p-2'>
          <Col><Fotkaa style={{backgroundImage: 'url(/src/assets/images/galery/kostel.jpg)'}} /></Col>
          <Col><Fotkaa style={{backgroundImage: 'url(/src/assets/images/galery/pano.jpg)'}} /></Col>
          <Col><Fotkaa style={{backgroundImage: 'url(/src/assets/images/galery/skola.jpg)'}} /></Col>
          <Col><Fotkaa style={{backgroundImage: 'url(/src/assets/images/galery/letadlo.jpg)'}} /></Col>
          
        </Row>
        <Row className='p-2'>
          <Col><Fotkaa style={{backgroundImage: 'url(/src/assets/images/galery/rytiri.jpg)'}} /></Col>
          <Col><Fotkaa style={{backgroundImage: 'url(/src/assets/images/galery/fotbalisti.jpg)'}} /></Col>
          <Col><Fotkaa style={{backgroundImage: 'url(/src/assets/images/galery/ples.jpg)'}} /></Col>
          <Col><Fotkaa style={{backgroundImage: 'url(/src/assets/images/galery/historie.jpg)'}} /></Col>
          
        </Row>

        <Row className='p-2'>
          <Col><Fotkaa style={{backgroundImage: 'url(/src/assets/images/galery/socha.jpg)'}} /></Col>
          <Col><Fotkaa style={{backgroundImage: 'url(/src/assets/images/galery/knihovna.jpg)'}} /></Col>
          <Col><Fotkaa style={{backgroundImage: 'url(/src/assets/images/galery/kresba.jpg)'}} /></Col>
          <Col><Fotkaa style={{backgroundImage: 'url(/src/assets/images/galery/urad.jpg)'}} /></Col>
          
        </Row>

        <Row className='p-2'>
          <Col><Fotkaa style={{backgroundImage: 'url(/src/assets/images/galery/vyhlidka.jpg)'}} /></Col>
          <Col><Fotkaa style={{backgroundImage: 'url(/src/assets/images/galery/bludovenka.jpg)'}} /></Col>
          
          
        </Row>
        
      </Container>
      
    </div>
  )
}
