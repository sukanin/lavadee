import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers/App/App';
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';

// Register icons and pull the fonts from the default SharePoint cdn.
initializeIcons();

ReactDOM.render(<App />, document.getElementById('main'));
