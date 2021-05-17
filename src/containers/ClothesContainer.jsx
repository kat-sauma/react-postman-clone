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

    const { url } = this.state;
    this.setState({ loading: true });
    const clothes = await httpCall(url);

    if (this.state.method === 'get') {
        let results = clothes;
        this.setState({ results: results });
    } else if (this.state.method === 'post') {
            let results = await postToApi(url, json);
            this.setState({ results: results });
    } else if (this.state.method === 'put') {
            let results = await putApi(url, json);
            this.setState({ results: results });
    } else {
        let results = await deleteFromApi(url);
        this.setState({ results: results });
    }

    this.setState({ loading: false });
}

    render() {
        const { loading, url, results, json } = this.state;
        
        if (loading) return <Spinner />;

        return (
            <main className='organize-closet' aria-label='organize closet'>
                <Controls 
                    url={url}
                    json={json}
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
