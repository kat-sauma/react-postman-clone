import React, { Component } from 'react'
import Controls from '../components/Controls';
import Display from '../components/Display';
import { httpCall } from '../service/ApiCall';
import Spinner from '../components/Spinner';

export default class ClothesContainer extends Component {
state = {
    loading: false,
    url: '',
    method: '',
    results: {},
    // body: ''
};

//handle on change
handleOnChange = ({ target }) => {
    this.setState({ url: target.value });
};

handleMethodChange = (e) => {
    this.setState({ method: e.target.value })
}
// handle submit -- loading true and then false once loaded
handleSubmit = async (event) => {
    event.preventDefault();

    const { url } = this.state;
    this.setState({ loading: true });
    const clothes = await httpCall(url);

    if (this.state.method === 'get') {
        let results = clothes;
        this.setState({ results: results });
    }

    this.setState({ loading: false });
};

    render() {
        const { loading, clothes, url, results } = this.state;
        if (loading) return <Spinner />;

        return (
            <main className='organize-closet' aria-label='organize closet'>
                <Controls 
                    url={url}
                    onUrlChange={this.handleOnChange}
                    onMethodChange={this.handleMethodChange}
                    onSubmit={this.handleSubmit}
                    
                />
                <Display results={results} />
            </main>
        )
    }
}
