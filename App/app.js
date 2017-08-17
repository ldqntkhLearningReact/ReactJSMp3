var React = require('react');
var ReactDOM = require('react-dom');
import {Provider} from 'react-redux';

import {store} from './store.js';

ReactDOM.render (
    <Provider store={store}>
        <ListNote />
    </Provider>,
    document.getElementById('demo')
);