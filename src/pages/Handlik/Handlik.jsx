import TextArea from '../../assets/components/TextArea/TextArea'
import AkceThumbnail from '../../assets/components/AkceThumbnail/AkceThumbnail'
import './Handlik.css'
export default function Handlik() {
  return (
    <div className='body'>
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
    
    </div>
  )
}
