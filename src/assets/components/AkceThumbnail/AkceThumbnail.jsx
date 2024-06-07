import './AkceThumbnail.css'

export default function AkceThumbnail({nazev, popis, datum, image}) {
  return (
    <div>
        <div className='AkceThumbnail-obal1'>
            <div className='AkceThumbnail-obrazek' style={{backgroundImage: `url(${image})`}}></div>
            <div className='AkceThumbnail-textObal'>
                <div className='AkceThumbnail-leva'>
                <p className='AkceThumbnail-nazev'>{nazev}</p>
                <p className='AkceThumbnail-popis'>{popis}</p>
                <p className='AkceThumbnail-datum'>{datum}</p>
                </div>
                <div className='AkceThumbnail-prava'>
                    <p className='AkceThumbnail-dalsiinfo'> <span className='colorred'>{'> '}</span> Další info</p>
                </div>
            </div>
        </div>
    </div>
  )
}
