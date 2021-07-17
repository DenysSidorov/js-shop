import React from 'react';
import {render, screen} from '@testing-library/react';

const App = () => (<div>test</div>);

test('render test text', () => {
    render(<App/>);
    const linkElement = screen.getByText(/test/i);
    expect(linkElement).toBeInTheDocument();
});
