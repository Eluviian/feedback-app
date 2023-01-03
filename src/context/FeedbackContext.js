//might have different contexts for different resources in a large application

import {createContext, useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([{
        id: 1,
        text: 'This is feedback item 1',
        rating: 10
    },
    {
        id: 2,
        text: 'This is feedback item 2',
        rating: 9
    },
    {
        id: 3,
        text: 'This is feedback item 3',
        rating: 7
    }])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false  //clicked = true = we are in edit mode
    }) 

    const deleteFeedback = (id) => {
        //set array to be a new array which does not have deleted item
        if (window.confirm('Are you sure you want to delete?')){  //message
            //filter = loops through array and filters out something according to a condition
            setFeedback(feedback.filter((item) => item.id !== id)) //returns array minus the one we are deleting
        }
    }

    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4(); //gives an id to object, this will be in addtiion to its text and rating
        setFeedback([newFeedback, ...feedback]);  //takes all objects already in feedback and adds new feedback to front
    }

    const updateFeedback = (id, updItem) =>{
        setFeedback(feedback.map((item) => item.id === id ? { ...item, ...updItem} : item));
    }

    //set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    return <FeedbackContext.Provider value = {{
        feedback, //actual piece of state holding item and boolean
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,  
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}


export default FeedbackContext;