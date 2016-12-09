import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma';

import Clock from './components/Clock';


export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Clock />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));