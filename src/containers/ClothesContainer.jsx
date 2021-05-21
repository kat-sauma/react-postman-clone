import React, { Component } from 'react'
import Controls from '../components/Controls';
import Display from '../components/Display';
import { httpCall, postToApi, putApi, deleteFromApi } from '../service/ApiCall';
import Spinner from '../components/Spinner';

export default class ClothesContainer extends Component {
state = {
    loading: false,
    url: '',
    method: 'get',
    results: {},
    json: ''
};

//handle on change
handleOnChange = ({ target }) => {
    this.setState({ url: target.value });
};

handleMethodChange = (e) => {
    this.setState({ method: e.target.value })
}

handleJsonChange = (e) => {
    this.setState({ json: e.target.value }, () => console.log(this.state.json))
}

// handle submit -- loading true and then false once loaded
handleSubmit = async (event) => {
    event.preventDefault();

    const { url, method, json } = this.state;
    this.setState({ loading: true });
    let results;
    if (method === 'get') {
        results = await httpCall(url);
    } else if (method === 'post') {
        results = await postToApi(url, json);
    } else if (method === 'put') {
        results = await putApi(url, json);
    } else {
        results = await deleteFromApi(url);
    }
    this.setState({ results: results });
    this.setState({ loading: false });
}

    render() {
        const { loading, url, results, json, method } = this.state;
        
        if (loading) return <Spinner />;
        console.log(this.state.method, 'method');
        return (
            <main className='organize-closet' aria-label='organize closet'>
                <Controls 
                    url={url}
                    json={json}
                    method={method}
                    onUrlChange={this.handleOnChange}
                    onMethodChange={this.handleMethodChange}
                    onJsonChange={this.handleJsonChange}
                    onSubmit={this.handleSubmit}
                    
                />
                <Display results={results} />
            </main>
        )
    }
}
