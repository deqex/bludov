
import Heading from '../assets/components/Heading/Heading';
import TextArea from '../assets/components/TextArea/TextArea';
import AkceThumbnail from '../assets/components/AkceThumbnail/AkceThumbnail';
import Footer from '../assets/components/Footer/Footer';
import gastro from '../assets/images/ostatni/gastrofetival.jpg'




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
                        <TextArea></TextArea>
                    </div>
                    <div className='innercontainer'>
                        <TextArea></TextArea>
                    </div>
                </div>
                <Heading text={"Nejbližsí akce "}></Heading>
            </div>
                <div className='AkceThumbnailContainer'>
                    <div className='innerthumbcont'>
                        <AkceThumbnail nazev={"GASTROFESTIVAL"} popis={"Pradědovo dětské muzeum"} datum={"09.06.2024"} image={gastro}></AkceThumbnail>
                    </div>
                    <div className='innerthumbcont'>
                        <AkceThumbnail nazev={"GASTROFESTIVAL"} popis={"Pradědovo dětské muzeum"} datum={"09.06.2024"} image={gastro}></AkceThumbnail>
                    </div>
                    <div className='innerthumbcont'>
                        <AkceThumbnail nazev={"GASTROFESTIVAL"} popis={"Pradědovo dětské muzeum"} datum={"09.06.2024"} image={gastro}></AkceThumbnail>
                    </div>
                </div>
            

            <Footer></Footer>


        </>
    )
}