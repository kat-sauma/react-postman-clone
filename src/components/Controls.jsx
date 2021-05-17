import React from 'react';
import PropTypes from 'prop-types';

const Controls = ( { url, onUrlChange, onMethodChange, onSubmit }) => (
        <form onSubmit={onSubmit}>
            <input
                id='url'
                type = 'url'
                value = {url}
                onChange={onUrlChange}
                placeholder='http://type-api-url-here.com'
                aria-label='url'
            />
            <section 
                role='radio-button-methods'
                className='radio-buttons'
                >

                <input 
                    id='get'
                    type='radio' 
                    name='method'
                    value='get'
                    onChange={onMethodChange}
                    defaultChecked
                />
                <label
                    className='radio-label'
                    htmlFor='get'
                    aria-label='get'>
                        get
                </label>
               
                <input 
                    id='post'
                    type='radio' 
                    name='method'
                    value='post'
                    onChange={onMethodChange}
                    defaultChecked
                />
                <label
                    className='radio-label'
                    htmlFor='post'
                    aria-label='post'>
                        post
                </label>


                </section>
            <button className='find-clothes' aria-label='find clothes'>Search</button>
        </form>
);

Controls.propTypes = {
    url: PropTypes.string.isRequired,
    onUrlChange: PropTypes.func.isRequired,
    onMethodChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Controls;

