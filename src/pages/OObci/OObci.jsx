import * as React from 'react';
import './OObci.css'
import TextAobr from '../../assets/components/TextAobr/TextAobr';
import NavbarTwo from '../../assets/components/NavbarTwo/NavbarTwo';
import obrazek from '../../assets/images/bludov.jpg'
import Heading from '../../assets/components/Heading/Heading';
import Footer from '../../assets/components/Footer/Footer';



export default function CustomizedAccordions() {

  return (
    <>
      <NavbarTwo></NavbarTwo>
      <div className='oobci-head'>
        <Heading text={"O obci"}></Heading>
      </div>
      <div className='oobci-container'>

        <TextAobr image={obrazek} text={'Bludov je malebná vesnice v Olomouckém kraji na severní Moravě, ležící v podhůří Jeseníků, nedaleko města Šumperk. Její historie sahá až do 13. století, kdy byla poprvé zmíněna v historických dokumentech. Bludov je známý svou bohatou historií a kulturními památkami, mezi které patří zejména barokní zámek Bludov a kostel svatého Jiří, které jsou hlavními turistickými atrakcemi této oblasti.Zámek Bludov, původně gotická tvrz, byl přestavěn v barokním stylu a dnes slouží jako kulturní a společenské centrum obce. Kostel svatého Jiří je významnou sakrální stavbou, která se pyšní bohatou výzdobou a historickým významem. V okolí Bludova se nachází nádherná příroda, která je ideální pro turistiku, cykloturistiku a další outdoorové aktivity.Bludov je také známý svými lázněmi, které využívají místní termální prameny. Lázně Bludov jsou oblíbeným místem pro relaxaci a léčebné pobyty, a to díky své příznivé poloze a kvalitním službám. Vesnice je tak příjemným místem k životu i návštěvě, spojujícím klid venkova s bohatou kulturní a historickou tradicí. Místní obyvatelé jsou hrdí na své dědictví a aktivně se podílejí na udržování kulturního a společenského života obce.'} ></TextAobr>

      </div>
      <div className='footermargin'>
      <Footer></Footer>
      </div>
    </>
  );
}
