import './AkceThumbnail.css'

export default function AkceThumbnail() {
  return (
    <div>
        <div className='AkceThumbnail-obal1'>
            <div className='AkceThumbnail-obrazek'></div>
            <div className='AkceThumbnail-textObal'>
                <div className='AkceThumbnail-leva'>
                <p className='AkceThumbnail-nazev'>Nazev</p>
                <p className='AkceThumbnail-popis'>Lorem ipsum dolor sit</p>
                <p className='AkceThumbnail-datum'>24.4.2024</p>
                </div>
                <div className='AkceThumbnail-prava'>
                    <p className='AkceThumbnail-dalsiinfo'> <span className='colorred'>{'> '}</span> Další info</p>
                </div>
            </div>
        </div>
    </div>
  )
}
