import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ url, json, onUrlChange, onMethodChange, onJsonChange, onSubmit }) => {
        const jsonPlaceholder = '{ \n "send": "raw", \n "json": "like so" \n} ' 

    return (
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
                
                <input 
                    id='put'
                    type='radio' 
                    name='method'
                    value='put'
                    onChange={onMethodChange}
                    defaultChecked
                />
                <label
                    className='radio-label'
                    htmlFor='put'
                    aria-label='put'>
                        put
                </label>
                
                <input 
                    id='delete'
                    type='radio' 
                    name='method'
                    value='delete'
                    onChange={onMethodChange}
                    defaultChecked
                />
                <label
                    className='radio-label'
                    htmlFor='delete'
                    aria-label='delete'>
                        delete
                </label>

                <textarea
                    aria-label='json-input'
                    value={json}
                    onChange={onJsonChange}
                    className='jsonText'
                    placeholder={jsonPlaceholder}
                >
                </textarea>

                </section>
            <button className='find-clothes' aria-label='find clothes'>Submit</button>
        </form>
    )
}

Controls.propTypes = {
    url: PropTypes.string.isRequired,
    json: PropTypes.string.isRequired,
    onUrlChange: PropTypes.func.isRequired,
    onMethodChange: PropTypes.func.isRequired,
    onJsonChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default Controls;

