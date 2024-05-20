import './Thumbnail.css'

export default function Thumbnail() {
  return (
    <>
    <div>
        <div className='Thumbnail-container'>
            <div className='Thumbnail-imgbox'></div>
            <div className='Thumbnail-container2'>
                <div className='Thumbnail-titlebox'>
                <p className='Thumbnail-title'>Nazev</p>
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
