import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import additionalFeaturesReducer from './reducers/additionalFeaturesreducer';

import 'bulma/css/bulma.css';
import './styles.css';

const store = createStore(additionalFeaturesReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App /> 
</Provider>,
rootElement);
