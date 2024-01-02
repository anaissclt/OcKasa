// IMPORTS
import { Link } from 'react-router-dom'
import './footer.css'

// ASSETS
import LogoFooter from '../../assets/logo-footer.png'


// Layout Footer
function Footer() {
   return (
      <footer className='Footer_Container'>
         <Link to="/">
            <img src={LogoFooter} alt='Logo de Kasa'/>
         </Link>
         <p className='Footer_Text'>© 2020 Kasa. All rights reserved</p>
      </footer>
   )
 }
 
 export default Footer