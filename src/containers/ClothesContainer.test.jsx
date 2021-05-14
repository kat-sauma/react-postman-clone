import React from 'react';
import { render, screen } from '@testing-library/react';
import { Spinner } from '../components/spinner/Spinner';


describe('it renders ArticleList Container', () => {
    render(<ClothesContainer />);


    screen.getByAltText('loading spinner');

    const inputURL = await.screen.findByRole('textbox', { aria labels });
})