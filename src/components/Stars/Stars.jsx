// STYLE
import "./stars.css";

// ASSETS
import starfilled from '../../assets/star-active.png';
import starempty from '../../assets/star-inactive.png';

function Stars({ star }) { 
   const stars = []; 
 
   for (let i = 1; i <= 5; i++) { 
      if (i <= star) { 
         stars.push(<img className='Stars' key={i} src={starfilled} alt="star-filled" />);
      } else {
         stars.push(<img className='Stars' key={i} src={starempty} alt="star-empty" />);
      }
   }

   return <div>{stars}</div>;
}
export default Stars;