import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
  return (
    <div>

      <div className='footerobal1'>
        <div className='footerleva'>
          <div className='footerAdresaObal'>
            <p className='footerheadline1'>Adresa</p>
            <p className='footeradresatext'>misto 57</p>
            <p className='footeradresatext'>misto 57</p>
          </div>

          <div className='footerSocialkyObal'>
            <p className='footerSocialkyText'>Sledujte nas:</p>
            <div className='footerSocialky'>
              <div className='FB'><FacebookIcon/></div>
              <div className='YT'><YouTubeIcon/></div>
              <div className='insta'><InstagramIcon/></div>
            </div>
          </div>
        </div>
        <div className='footerprava'>
          <div className='footerkontakt'>
            <div className='footerkontakttext'>
              <p className='footerkontaktheader'>Starosta</p>
              <p className='footeremail'>nesnasim.negry@gmail.com</p>
            </div>
          </div>
          <div className='footerkontakt'>
            <div className='footerkontakttext'>
              <p className='footerkontaktheader'>Starosta</p>
              <p className='footeremail'>nesnasim.negry@gmail.com</p>
            </div>
          </div>
        </div>
        
      </div>


    </div>
  )
}
