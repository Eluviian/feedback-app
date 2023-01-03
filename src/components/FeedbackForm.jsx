//want to wrap form in card
import Card from "./shared/Card";
import {useState} from 'react';
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";
import { useContext, useEffect } from "react";


function FeedbackForm() {
    const [text, setText] = useState('');  //need to connect input to this
    const [btnDisabled, setBtnDisabled] = useState(true);  //default of true, css styling for disbaled button
    const [rating, setRating] = useState(10);
    const [message, setMessage] = useState('');

    const {addFeedback, updateFeedback, feedbackEdit} = useContext(FeedbackContext);

    useEffect (() => {
        if (feedbackEdit.edit === true){
            setBtnDisabled(false);
            setText(feedbackEdit.item.text);
            setRating(feedbackEdit.item.rating);

        }
    }, [feedbackEdit]);  //array of dependencies, runs whenever you click on an edit in this case
    //if no dependencies, runs once

    
    const handleTextChange = (e) => {  //called with onChange
        if (text===''){
            setBtnDisabled(true);
            setMessage(null);
        } else if (text !== '' && text.trim().length < 10) {  //trim whitespace
            setBtnDisabled(true);
            setMessage('Text must be at least 10 characters');
        } else {
            setBtnDisabled(false);
            setMessage(null);
        }
        setText(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); //prevent default behaviour of submitting to file
        if (text.trim().length >= 10) { //check this again, ways around our previous check if tech savvy
            const newFeedback = {
                text: text,
                rating: rating
            }
        
            //handleAdd(newFeedback);

            if (feedbackEdit.edit === true){
                updateFeedback(feedbackEdit.item.id, newFeedback);
            } else {
                addFeedback(newFeedback);
            }

            setText('');


        }
    }
    return (
        <Card>
            <form onSubmit = {handleSubmit}>
                <h2>How would you rate your service with us?</h2>
                <RatingSelect select={(rating) => setRating(rating)}/>
                <div className="input-group">
                    <input onChange={handleTextChange} 
                    type="text" 
                    placeholder="Write a review"
                    value={text}
                    />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>

                </div>
                {message && <div className='message'>{message} </div>}
            </form>
        </Card>
    );
}

export default FeedbackForm;