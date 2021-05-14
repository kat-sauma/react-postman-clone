import React from 'react';
import { render, screen } from '@testing-library/react';
import { Spinner } from '../components/spinner/Spinner';
import ClothesContainer from './ClothesContainer';


describe('it renders ArticleList Container', () => {
    render(<ClothesContainer />);


    screen.getByAltText('loading spinner');

    const inputURL = await.screen.findByRole('textbox', { url });

    expect(inputURL).toMatchSnapshot();
})