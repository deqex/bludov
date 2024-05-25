import Navbar from '../assets/components/Navbar/Navbar';
import Heading from '../assets/components/Heading/Heading';
import TextArea from '../assets/components/TextArea/TextArea';
import AkceThumbnail from '../assets/components/AkceThumbnail/AkceThumbnail';
import Footer from '../assets/components/Footer/Footer';



import './Home.css'
export default function Home() {



    return (
        <>
            <Navbar></Navbar>
            <Heading>Aktuality</Heading>
            <div className='textareacontainer'>
                <div className='innercontainer'>
                    <TextArea></TextArea>
                </div>
                <div className='innercontainer'>
                    <TextArea></TextArea>
                </div>
            </div>
            <Heading></Heading>
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