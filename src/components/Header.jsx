//import React from 'react';  //don't need to do this anymore, used to need
import PropTypes from "prop-types"

function Header({ text, bgColor, textColor }){   //Header is an object with any props that are passed in

    const headerStyles = {
        backgroundColor: bgColor, color:textColor
    }
    return(
        //double curly brackets when in line like this
        <header style={headerStyles}>   
            <div className='container'>
                <h2> {text}</h2>
            </div>

        </header>
    );
    }

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95'
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}

export default Header;
