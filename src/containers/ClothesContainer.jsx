import React, { Component } from 'react'
import Controls from '../components/Controls';
import { httpCall } from '../service/ApiCall';

export default class ClothesContainer extends Component {
state = {
    loading: false,
    url: '',
    // method: false,
    // body: ''
};

//handle on change
handleOnChange = ({ target }) => {
    this.setState({ url: target.value });
};

// handle submit -- loading true and then false once loaded
handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ loading: true });
    const clothes = await httpCall(this.state.url);

     this.setState({
        loading: false,
        clothes
    });
};

    render() {
        const { loading, clothes, url } = this.state;
        if (loading) return <img className='loading-spinner' src='loadingedit3.gif' alt='loading-spinner' aria-label='loading spinner' />;

        return (
            <section className='organize-closet' aria-label='organize closet'>
                <Controls 
                    url={url}
                    onUrlChange={this.handleOnChange}
                    onSubmit={this.handleSubmit}
                    
                />
            </section>
        );
    }
}
