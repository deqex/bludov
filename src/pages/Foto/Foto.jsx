import React from "react";
import NavbarTwo from "../../assets/components/NavbarTwo/NavbarTwo";
import "../Foto/Foto.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fotkaa from "../../assets/components/Fotkaa/Fotkaa";
import { Link } from "react-router-dom";
import Footer from "../../assets/components/Footer/Footer";

export default function Foto() {
  return (
    <div>
      <NavbarTwo></NavbarTwo>

      <Container>
        <Row className="p-2">
          <Col>
          <Link to={"/src/assets/images/galery/kostel.jpg"}>
            <Fotkaa image={"/src/assets/images/galery/kostel.jpg"} />
            </Link>
          </Col>
          <Col>
          <Link to={"/src/assets/images/galery/pano.jpg"}>
            <Fotkaa image={"/src/assets/images/galery/pano.jpg"} /></Link>
          </Col>
          <Col>
          <Link to={"/src/assets/images/galery/skola.jpg"}>
            <Fotkaa image={"/src/assets/images/galery/skola.jpg"} /></Link>
          </Col>
          <Col>
          <Link to={"/src/assets/images/galery/letadlo.jpg"}>
            <Fotkaa image={"/src/assets/images/galery/letadlo.jpg"} /></Link>
          </Col>
        </Row>
        <Row className="p-2">
          <Col>
          <Link to={"/src/assets/images/galery/rytiri.jpg"}>
            <Fotkaa image={"/src/assets/images/galery/rytiri.jpg"} /></Link>
          </Col>
          <Col>
          <Link to={"/src/assets/images/galery/fotbalisti.jpg"}>
            <Fotkaa image={"/src/assets/images/galery/fotbalisti.jpg"} /></Link>
          </Col>
          <Col>
          <Link to={"/src/assets/images/galery/ples.jpg"}>
            <Fotkaa image={"/src/assets/images/galery/ples.jpg"} /></Link>
          </Col>
          <Col>
          <Link to={"/src/assets/images/galery/historie.jpg"}></Link>
            <Fotkaa image={"/src/assets/images/galery/historie.jpg"} />
          </Col>
        </Row>

        <Row className="p-2">
          <Col>
          <Link to={"/src/assets/images/galery/socha.jpg"}>
            <Fotkaa image={"/src/assets/images/galery/socha.jpg"} /></Link>
          </Col>
          <Col>
          <Link to={"/src/assets/images/galery/knihovna.jpg"}>
            <Fotkaa image={"/src/assets/images/galery/knihovna.jpg"} /></Link>
          </Col>
          <Col>
          <Link to={"/src/assets/images/galery/kresba.jpg"}>
            <Fotkaa image={"/src/assets/images/galery/kresba.jpg"} /></Link>
          </Col>
          <Col>
          <Link to={"/src/assets/images/galery/urad.jpg"}>
            <Fotkaa image={"/src/assets/images/galery/urad.jpg"} /></Link>
          </Col>
        </Row>

        <Row className="p-2">
          <Col>
          <Link to={"/src/assets/images/galery/vyhlidka.jpg"}>
            <Fotkaa image={"/src/assets/images/galery/vyhlidka.jpg"} /></Link>
          </Col>
          <Col>
          <Link to={"/src/assets/images/galery/pohled.jpg"}>
            <Fotkaa image={"/src/assets/images/galery/pohled.jpg"} /></Link>
          </Col>
          <Col>
          <Link to={"/src/assets/images/galery/pohled2.jpg"}>
            <Fotkaa image={"/src/assets/images/galery/pohled2.jpg"} /></Link>
          </Col>
          <Col>
          <Link to={"/src/assets/images/galery/bludovenka.jpg"}>
            <Fotkaa image={"/src/assets/images/galery/bludovenka.jpg"} /></Link>
          </Col>
        </Row>
      </Container>
    <Footer></Footer>
    </div>
  );
}