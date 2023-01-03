import Header from "./components/Header"
//import FeedbackItem from "./components/FeedbackItem"
import FeedbackList from "./components/FeedbackList";
//import {useState} from 'react';
//import {v4 as uuidv4} from 'uuid';
//import FeedbackData from "./data/FeedbackData"
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; //more common to use BrowserRouter than HashRouter
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";   //not a default export = curly brackets

function App(){
    //const [feedback, setFeedback] = useState(FeedbackData);  //need for this eliminated by FeedbackContext

    //must be defined here instead of in FeedbackItem or FeedbackList
    //passed all the way back from FeedbackItem -> List -> App - prop drilling
    // const deleteFeedback = (id) => {
    //     //set array to be a new array which does not have deleted item
    //     if (window.confirm('Are you sure you want to delete?')){  //message
    //         //filter = loops through array and filters out something according to a condition
    //         setFeedback(feedback.filter((item) => item.id !== id)) //returns array minus the one we are deleting
    //     }
    // }

    // const addFeedback = (newFeedback) => {
    //     newFeedback.id = uuidv4(); //gives an id to object, this will be in addtiion to its text and rating
    //     setFeedback([newFeedback, ...feedback]);  //takes all objects already in feedback and adds new feedback to front
    // }
    
    return( //need to wrap eberything in router in order to use it
        //feedback is a source of truth - whenever it changes, stats and list will also change
        //wrap in Router to use Route components, wrap in Provider
        <FeedbackProvider>
        <Router>
        <Header/>
            <div className='container'>
                <Routes>
                <Route exact path='/' element={
                    <>
                    <FeedbackForm/>
                    <FeedbackStats/>
                    <FeedbackList/>                   
                    </>
                }>                
                </Route>

                <Route path='/about' element={<AboutPage/>}/>

                </Routes>

                <AboutIconLink/>
                </div>

        </Router>
        </FeedbackProvider>
    
   /*
        <>
        <Header/>
        <div className='container'>



        <FeedbackForm handleAdd = {addFeedback}/>
        <FeedbackStats feedback={feedback}/>
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>

        </div>
        </>

   */
    )
}

export default App