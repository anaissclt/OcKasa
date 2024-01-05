// IMPORTS
import { Link } from 'react-router-dom'
import './card.css'


// ASSETS
import DATA from '../../assets/data.json'

function Card() {
   return (
      <section className='Card_Container'>
         {DATA.map((location) => (  //méthode map : créer une carte pour chaque élément

            <Link to={`/location/${location.id}`} key={location.id} >
               <figure className='Card'>
                  <img className='Card_Image' src={location.cover} alt={location.title}/>        
                  <div className='Card_background'></div>      
                  <figcaption className='Card_Title'>{location.title}</figcaption>
               </figure>
            </Link>

         ))}
      </section>
   )
}
export default Card