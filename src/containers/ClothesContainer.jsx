import React, { Component } from 'react'
import Controls from '../components/Controls';

export default class ClothesContainer extends Component {
state = {
    loading: false,
    url: '',
    // method: false,
    // body: ''
};

//handle on change

// handle submit -- loading true and then false once loaded


    render() {
        const { url } = this.state;
        // if (loading) return <img src='loadingedit3.gif' alt='loading-spinner' />;

        return (
            <section classname='organize-closet' aria-label='organize-closet'>
                <Controls 
                    url={url}
                    
                />
            </section>
        )
    }
}
