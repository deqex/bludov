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
            <p className='footeradresatext'>Úřad: tř. A. Kašpara 361, 789 61 Bludov</p>
            <p className='footeradresatext'>Město: tř. A. Kašpara 361, 789 61 Bludov</p>
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
              <p className='footeremail'>starosta@bludov.cz</p>
            </div>
          </div>
          <div className='footerkontakt'>
            <div className='footerkontakttext'>
              <p className='footerkontaktheader'>Obecí ůřad</p>
              <p className='footeremail'>podatelna@ou.bludov.cz</p>
            </div>
          </div>
        </div>
        
      </div>


    </div>
  )
}
