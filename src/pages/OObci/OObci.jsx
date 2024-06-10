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

        <TextAobr image={obrazek} text="What if drake was called Skibidi Drake and instead of making songs like 'god's plan' he made 'Gyatt's plan' in which he rizzes Kai Cenat's lvl 10 gyatt from ohio while having Baby Gronk as a feature and edging Livvy Dunne throughout the song until he starts jelqing like a sigma after which the beat drops and in the background you can hear turkish quandale dingle sipping the grimace shake at 3 am the ocky way with Nathaniel b

In the recent beef with Kendrick SpeakerMan Llamar, Skibidi Drake has been fanum taxed by Kendrick Speaker, being accused of rizzing up a level <18 Gyatt and potentially even jelqing with her. Skibidi Drake has denied these allegations, stating 'That beta male Kendrick Speakerman will be fanum taxed by me and my skibidi toilet army if he keeps edging me with these outrageous accusations! This is a load of ohio grimace shakes!'

Do you mew with Kendrick speakerman or Skibidi Drake?!?!?"></TextAobr>

      </div>
      <Footer></Footer>
    </>
  );
}
