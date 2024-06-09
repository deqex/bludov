import './Thumbnail.css'

export default function Thumbnail(props) {
  return (
    <>
    <div>
        <div className='Thumbnail-container'>
            <div className='Thumbnail-imgbox'>
              <img className='Thumbnail-img' src={props.src} alt="kamo cos dokazal posrat" />
            </div>
            <div className='Thumbnail-container2'>
                <div className='Thumbnail-titlebox'>
                  {props.name}
                </div>
                <div className='Thumbnail-buttonbox'>
                    <p className='Thumbnail-button'> <span className='colorred'>{'> '}</span> Další info</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
