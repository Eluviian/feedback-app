import FeedbackItem from "./FeedbackItem";
//import PropTypes from 'prop-types';
import {motion, AnimatePresence} from 'framer-motion';
import {useContext} from 'react';
import FeedbackContext from "../context/FeedbackContext";

//function FeedbackList({feedback, handleDelete}){
function FeedbackList(){
    const {feedback} = useContext(FeedbackContext); //can have more types of context here
    if(!feedback || feedback.length === 0) {
        return <p>No Feedback Yet</p>
    }
    // return(
    //     <div className='feedback-list'>
    //         <AnimatePresence>
    //             {feedback.map((item) => (
    //                 <motion.div
    //                 key={item.id}
    //                 initial={{opacity: 0}}
    //                 animate={{opacity: 1}}
    //                 exit = {{opacity: 0}}
    //                 layout>
    //                 <FeedbackItem key={item.id} item={item} 
    //                 handleDelete = {handleDelete}/>
    //             </motion.div>
    //             ))}
    //         </AnimatePresence>
    //     </div>
    // );
    return(
        <div className='feedback-list'>
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} />
            
        ))}
        </div>
    );
}

// FeedbackList.propTypes = {
//     feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//             text: PropTypes.string.isRequired,
//             rating: PropTypes.number.isRequired
//         })
//     )  //can also just use array
// }

export default FeedbackList;