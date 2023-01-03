//import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

//function FeedbackStats({feedback}){
    function FeedbackStats(){
    const {feedback} = useContext(FeedbackContext)

    //Calcualte rating average
    //reduce funtion will get sum
    let average = feedback.reduce((acc, cur) => {   //reduce
        return acc + cur.rating;
    }, 0);  //0 = default for accumulator
    average /= feedback.length;
    average = average.toFixed(1).replace(/[.,]0$/,''); //fixes decimal point, 1 max or no decimal if whole number

    return (
        <div className = 'feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    );
}

// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired
// }

export default FeedbackStats;