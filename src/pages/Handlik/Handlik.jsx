import TextArea from '../../assets/components/TextArea/TextArea'
import AkceThumbnail from '../../assets/components/AkceThumbnail/AkceThumbnail'
import Footer from '../../assets/components/Footer/Footer'
import TextAobr from '../../assets/components/TextAobr/TextAobr'
import BIG from '../../assets/components/BIG/BIG'
import './Handlik.css'
import Gattan from '../../assets/components/NavbarTwo/NavbarTwo'

export default function Handlik() {
  return (
    <div className='body'>
      <BIG></BIG>
      <div className='textareacontainer'>


        <div className='innercontainer'>
        <TextArea></TextArea>
        </div>


        <div className='innercontainer'>
        <TextArea></TextArea>
        </div>
        
      </div>



      <div className='AkceThumbnailContainer '>
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

      <TextAobr></TextAobr>

      <Footer></Footer>
    
    </div>
  )
}
