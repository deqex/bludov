import React from 'react'
import './Rekreace.css'
import NavbarTwo from '../../assets/components/NavbarTwo/NavbarTwo'
import Place from '../../assets/components/Place/Place'
import { Container, Row, Col } from 'react-bootstrap'
import hriste from '../../assets/images/galery/hriste.jpg'
import hriste2 from '../../assets/images/galery/viceucelove.jpg'
import farnost from '../../assets/images/galery/farnost.jpg'
import kniha from '../../assets/images/galery/knihovna.jpg'
import Footer from '../../assets/components/Footer/Footer'


export default function Rekreace() {
  return (
    <div>
      <NavbarTwo></NavbarTwo>
      <Container>
        <Row>
          <Col>
            <Place image={hriste} telefon={''} name={"Dětské hřiště"} email={"Adresa: U Dětské Hřiště Bludov Okres Šumperk"}
              text={"Dětské hřiště v Bludově je oblíbeným místem pro rodiny s dětmi. Nachází se v centru obce, což zajišťuje snadnou dostupnost. Hřiště je moderně vybavené, nabízí různé herní prvky jako skluzavky, houpačky, prolézačky a pískoviště. Povrch hřiště je bezpečný, vyrobený z měkkého materiálu, který minimalizuje riziko zranění při pádu. Kromě herních prvků je zde také dostatek laviček pro rodiče, kteří mohou pohodlně sledovat své děti při hře. Celé hřiště je oplocené, což zvyšuje bezpečnost dětí. Hřiště v Bludově je ideálním místem pro aktivní odpočinek a zábavu pro děti všech věkových kategorií."}>
            </Place>
          </Col>
          <Col>
            <Place image={hriste2} telefon={""} name={"Víceúčelového hřiště"} email={"Adresa: Školní 446 Bludov Okres Šumperk"}
              text={"Víceúčelové hřiště v Bludově, České republice, je moderní sportovní areál, který slouží široké veřejnosti. Hřiště nabízí různé sportovní aktivity, včetně fotbalu, basketbalu, volejbalu a tenisu. Povrch hřiště je přizpůsoben pro různé druhy sportů, což zajišťuje vysokou kvalitu hry a bezpečnost. V areálu je také osvětlení, které umožňuje sportovat i večer. Tento projekt byl realizován za podpory obce a místních nadšenců, kteří chtěli zlepšit sportovní možnosti pro obyvatele všech věkových kategorií. Víceúčelové hřiště tak přispívá k aktivnímu a zdravému životnímu stylu místní komunity."}>
            </Place>
          </Col>
        </Row>
        <Row>
        <Col>
            <Place image={kniha} telefon={""} name={"Místní knihovna"} email={"Adresa: Nová dědina 368 Bludov Okres Šumperk"}
              text={"Místní knihovna v Bludově, České republice, je významným kulturním a vzdělávacím centrem obce. Nabízí širokou škálu knih a periodik pro čtenáře všech věkových kategorií, od beletrie po odbornou literaturu. Knihovna pravidelně pořádá různé akce, jako jsou autorská čtení, besedy a workshopy, které podporují čtenářskou gramotnost a komunitní život. Pro děti jsou zde organizovány speciální programy, jako například čtenářské kluby a tvůrčí dílny. Moderní vybavení knihovny, včetně přístupu k internetu, poskytuje návštěvníkům komfortní prostředí pro studium i volný čas. Knihovna tak hraje klíčovou roli v kulturním a společenském životě Bludova."}>
            </Place>
          </Col>
          <Col>
            <Place image={farnost} telefon={""} name={"Dětské hřiště"} email={"Adresa: Jana Žižky 144 Bludov okres Šumperk"}
              text={"Římskokatolická farnost Bludov je duchovním centrem obce Bludov v České republice. Farnost spravuje kostel sv. Jiří, který je významnou historickou a architektonickou památkou regionu. V kostele se pravidelně konají bohoslužby, svátosti a další církevní obřady. Farnost organizuje také různé komunitní a charitativní akce, které podporují soudržnost a duchovní život místních obyvatel. Kromě toho se zde konají katechetická setkání, biblické hodiny a přípravy na svátosti pro děti i dospělé. Římskokatolická farnost Bludov tak hraje klíčovou roli v duchovním a společenském životě obce, poskytujíc podporu a vedení místní komunitě."}>
            </Place>
          </Col>
        </Row>
      </Container>
      <div className='footermargin'>
        <Footer></Footer>
      </div>
    </div>
  )
}
