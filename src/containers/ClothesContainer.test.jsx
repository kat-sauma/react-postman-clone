import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ClothesContainer from './ClothesContainer';


describe('Clothes Container', () => {
    it('renders the form that holds controls, the body of returned json, and the history list', async () => {

        render(<ClothesContainer />);
        
        const inputURL = await screen.findByRole('textbox', { name: 'url' })
        userEvent.type(url, 'https://yalla-habibi.herokuapp.com/clothes')
        expect(inputURL).toMatchSnapshot();

        const getMethod = screen.getByRole('radio', { name: 'get' })
        expect(getMethod).toMatchSnapshot();
        

        const button = await screen.findByRole('button', { name: 'find clothes' });
        expect(button).toMatchSnapshot();
        userEvent.type(url, 'https://yalla-habibi.herokuapp.com/clothes/1')


        userEvent.click(button);
        screen.getByAltText('loading-spinner');
    });
});