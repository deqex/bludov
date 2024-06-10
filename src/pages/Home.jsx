
import Heading from '../assets/components/Heading/Heading';
import TextArea from '../assets/components/TextArea/TextArea';
import AkceThumbnail from '../assets/components/AkceThumbnail/AkceThumbnail';
import Footer from '../assets/components/Footer/Footer';
import gastro from '../assets/images/ostatni/gastrofetival.jpg'
import chleba from '../assets/images/bleba.png'




import './Home.css'
import BIG from '../assets/components/BIG/BIG';
import NavbarTwo from '../assets/components/NavbarTwo/NavbarTwo';
export default function Home() {



    return (
        <>
            <NavbarTwo></NavbarTwo>
            <BIG></BIG>

            <div className='homemain'>
                <Heading text={"Aktuality"}></Heading>
                <div className='textareacontainer'>
                    
                    <div className='innercontainer'>
                        <TextArea head={'Změna obsluhy zastávek'} text={'V termínu od 11. do 17. dubna 2024 byla kvůli úplné uzavírce silnice I/44 u železničního přejezdu "u Habermanna" změněna obsluha některých autobusových zastávek. Zastávka Bludov, Habermannova vila nebyla obsluhována a zastávka Bludov, dol. konec byla přemístěna o cca 200 metrů dál'}></TextArea>
                    </div>
                    <div className='innercontainer'>
                        <TextArea head={'Dopravní nehoda'} text={'Nedávno došlo k vážné dopravní nehodě v Bludově, při které musel zasahovat i vrtulník. Při této nehodě bylo zraněno pět lidí​'}></TextArea>
                    </div>
                </div>
                <Heading text={"Nejbližsí akce "}></Heading>
            </div>
                <div className='AkceThumbnailContainer'>
                    <div className='innerthumbcont'>
                        <AkceThumbnail nazev={"GASTROFESTIVAL"} popis={"Pradědovo dětské muzeum"} datum={"09.06.2024"} image={gastro}></AkceThumbnail>
                    </div>
                    <div className='innerthumbcont'>
                        <AkceThumbnail nazev={"Kurz pečení chleba"} popis={"Obecní klub"} datum={"22.06.2024"} image={chleba}></AkceThumbnail>
                    </div>
                    <div className='innerthumbcont'>
                        <AkceThumbnail nazev={"GASTROFESTIVAL"} popis={"Pradědovo dětské muzeum"} datum={"09.06.2024"} image={gastro}></AkceThumbnail>
                    </div>
                </div>
            

            <Footer></Footer>


        </>
    )
}