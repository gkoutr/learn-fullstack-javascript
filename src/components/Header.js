import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({ message}) => {
    return (
        <h2 className="Header text-center">
            {message}
        </h2>
    );
};

//validate that props is a string
Header.propTypes = {
    headerMessage: React.PropTypes.string
};

export default Header;