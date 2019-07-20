import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers/App/App';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

initializeIcons(/* optional base url */);

ReactDOM.render(<App />, document.getElementById('app'));
