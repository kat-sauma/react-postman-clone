import React from 'react';
import PropTypes from 'prop-types';

const Controls = ( { url }) => (
    
        <form>
            <input
                type = 'url'
                value = {url}
                aria-label='url'
                // onChange={}
            />
        </form>
    
);

Controls.propTypes = {
    url: PropTypes.string.isRequired
};

export default Controls;

