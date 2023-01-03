import {FaQuestion} from 'react-icons/fa';
import {Link} from 'react-router-dom';
function AboutIconLink(){
    //href bad - refreshes, does not do things on client side?
    //can also add query, other params in "to" using curly brackets
    return (
        /*
        <div className='about-link'>
            <a href='/about'>
            <FaQuestion size={30}/>
            </a>

        </div>
    */
        <div className='about-link'>
        <Link to='/about'>
        <FaQuestion size={30}/>
        </Link>

    </div>

   
   
        );
}

export default AboutIconLink;