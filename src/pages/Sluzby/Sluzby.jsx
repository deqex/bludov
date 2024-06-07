import React from 'react'
import './Sluzby.css'
import NavbarTwo from '../../assets/components/NavbarTwo/NavbarTwo'
import Place from '../../assets/components/Place/Place'
import { Container, Row, Col } from "react-bootstrap";
export default function Sluzby() {
  return (
    <div>
      <NavbarTwo></NavbarTwo>
      <Container>
      <Row>
        <Col>
      <Place telefon={"734 268 838"} name={"Dětské hřiště"} email={"nesnasim.negry@gmail.com"}
      text ={"Dětské hřiště v Bludově je oblíbeným místem pro rodiny s dětmi. Nachází se v centru obce, což zajišťuje snadnou dostupnost. Hřiště je moderně vybavené, nabízí různé herní prvky jako skluzavky, houpačky, prolézačky a pískoviště. Povrch hřiště je bezpečný, vyrobený z měkkého materiálu, který minimalizuje riziko zranění při pádu. Kromě herních prvků je zde také dostatek laviček pro rodiče, kteří mohou pohodlně sledovat své děti při hře. Celé hřiště je oplocené, což zvyšuje bezpečnost dětí. Hřiště v Bludově je ideálním místem pro aktivní odpočinek a zábavu pro děti všech věkových kategorií."}>
      </Place>
        </Col>
        <Col>
      <Place telefon={"734 268 838"} name={"Dětské hřiště"} email={"nesnasim.negry@gmail.com"} text ={"Dětské hřiště v Bludově je oblíbeným místem pro rodiny s dětmi. Nachází se v centru obce, což zajišťuje snadnou dostupnost. Hřiště je moderně vybavené, nabízí různé herní prvky jako skluzavky, houpačky, prolézačky a pískoviště. Povrch hřiště je bezpečný, vyrobený z měkkého materiálu, který minimalizuje riziko zranění při pádu. Kromě herních prvků je zde také dostatek laviček pro rodiče, kteří mohou pohodlně sledovat své děti při hře. Celé hřiště je oplocené, což zvyšuje bezpečnost dětí. Hřiště v Bludově je ideálním místem pro aktivní odpočinek a zábavu pro děti všech věkových kategorií."}>
      </Place>
      </Col>
      </Row>
      </Container>
    </div>
    
  )
}
