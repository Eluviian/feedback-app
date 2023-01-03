import PropTypes from 'prop-types';

function Button({ children, version, type, isDisabled }){
    //btn in css file
    //adds version class conditionally?
    //version = primary or secondary
    return (
        <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDiabled: false

}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    type: PropTypes.string,
    isDisbaled: PropTypes.bool
}

export default Button;