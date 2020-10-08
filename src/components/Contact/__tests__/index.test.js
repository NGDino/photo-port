import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
// import Contact from '..';
import ContactForm from '..';

afterEach(cleanup);

describe('Contact component', () =>{
    it('renders', ()=>{
        render(<ContactForm/>)
    })
    it('matches snapshot DOM node structure', () => {
        // render About
        const { asFragment } = render(<ContactForm />);
        expect(asFragment()).toMatchSnapshot();
      })
})