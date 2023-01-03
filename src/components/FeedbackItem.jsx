import {useState} from 'react';
import Card from "./shared/Card";
import PropTypes from 'prop-types';
import {FaTimes, FaEdit} from 'react-icons/fa';  //importing font from react icons (fa is the library)
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({item}){

    const {deleteFeedback, editFeedback} = useContext(FeedbackContext);
    //const [rating, setRating] = useState(7);  //default of 7, destructuring an array from what this function returns
    //const [text, setText] = useState('This is a default');
    /*
    //if you hav a button, this can be used for onClick to change value of rating
    const handleClick = () => {
        setRating((prev) => {
            return prev + 1;
        })   //changes rating when button clicked
    }*/
    
    return (
        //Card in global style sheet
        //and close button
        //function right on onClick, can also us a function name defined somewhere else
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)}  className="close">
                <FaTimes color='purple' />
            </button>
            <button onClick={() => editFeedback(item)} className="edit">
                <FaEdit color="purple"/>
            </button>
            <div className="text-display">{item.text}   </div>

        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}


export default FeedbackItem;