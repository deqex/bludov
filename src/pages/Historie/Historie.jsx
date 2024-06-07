import React from 'react'
import './Historie.css'
import NavbarTwo from '../../assets/components/NavbarTwo/NavbarTwo'
import Heading from '../../assets/components/Heading/Heading'
import TextAobr from '../../assets/components/TextAobr/TextAobr';
import Footer from '../../assets/components/Footer/Footer';
import obrazek from '../../assets/images/ostatni/historie.jpg'

export default function Historie() {
  return (
    <div>
      <NavbarTwo />
      <div className='mainHistory'>
        <div className='headinghistorybox'>
          <Heading text={"Historie"} />
        </div>
        <TextAobr
          text={"Obec Bludov byla založena na přelomu 12. a 13. století markraběcím úředníkem Bludem z Bludova. Rod Žerotínů, kteří vlastnili Bludov, měl ve svém erbu lva na třech hůrkách. Ve 13. století vznikla bludovská farnost a původní kostel sv. Jiří, přestavěný v letech 1837-1838. V 14. století patřila obec moravským markrabatům, v 15. století pánům z Kunštátu a Tunklům z Brníčka, kteří vybudovali rybniční soustavu. Hrad Bludov byl zbořen kolem roku 1471. V roce 1496 Bludov koupili Žerotínové. V 16. století obec často měnila majitele, po roce 1571 byla postavena renesanční tvrz, kterou Lichtenštejnové přestavěli na dvoukřídlý zámek, rozšířený a barokizovaný v roce 1708.V roce 1710 se Bludov stal hlavním sídlem Žerotínů. Roku 1842 byla u kostela sv. Jiří zřízena žerotínská hrobka. Bludov se v 19. století stal centrem českého národního života na Šumpersku, roku 1908 zde byla otevřena první česká měšťanská škola. Roku 1929 založil Zdeněk Pospíšil léčebné lázně. Po osvobození v roce 1945 a po roce 1989 došlo k obnově samosprávy, zlepšení životního prostředí díky plynofikaci a opravám památek. Bludov má dnes více než 3000 obyvatel a pokračuje ve svém rozvoji."}
          image={obrazek} // Pass the correct prop
        />
      </div>
      <Footer />
    </div>
  )
}
