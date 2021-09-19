import { default as ReactDOM } from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './components';
import { store } from './store';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);
