
import Heading from '../assets/components/Heading/Heading';
import TextArea from '../assets/components/TextArea/TextArea';
import AkceThumbnail from '../assets/components/AkceThumbnail/AkceThumbnail';
import Footer from '../assets/components/Footer/Footer';





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
                        <AkceThumbnail></AkceThumbnail>
                    </div>
                    <div className='innerthumbcont'>
                        <AkceThumbnail></AkceThumbnail>
                    </div>
                    <div className='innerthumbcont'>
                        <AkceThumbnail></AkceThumbnail>
                    </div>
                </div>
            

            <Footer></Footer>


        </>
    )
}