import React from "react";
import PropTypes from 'prop-types';

const AppLayout = ( {children }) =>{
    return(
        <div>
            <div>All</div>
            {children}
        </div>
    )
}

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;