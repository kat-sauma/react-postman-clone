import React from 'react'
import PropTypes from 'prop-types'


const Display = ({ results }) => {
    return (
        <section
            role='contentinfo'
            aria-label='display results'
            className='display-results'
        >
            {JSON.stringify(results, null, 2)}
        </section>
    )
}

Display.propTypes = {
    results: PropTypes.any.isRequired
}

export default Display

