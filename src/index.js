import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';


// Create component that produce HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take a component and put it in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
