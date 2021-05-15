import React from 'react';
import PropTypes from 'prop-types';

const Controls = ( { url, onUrlChange, onSubmit }) => (
        <form onSubmit={onSubmit}>
            <input
                id='url'
                type = 'url'
                value = {url}
                onChange={onUrlChange}
                placeholder='http://type-api-url-here.com'
                aria-label='url'
            />
            <button className='find-clothes' aria-label='find clothes'>Search</button>
        </form>
);

Controls.propTypes = {
    url: PropTypes.string.isRequired,
    onUrlChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Controls;

