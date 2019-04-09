import { HashRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router'; 
import * as React from 'react';
import Basic from './Basic/index.tsx';
import Interface from './Interface/index.tsx';
import Navigator from './Navigator/index.tsx';

class App extends React.Component {
    render() {
        return <HashRouter>
            <Switch>
                <Route path="/" exact component={Navigator} />
                <Route path="/basic" component={Basic} />
                <Route path="/interface" component={Interface} />
            </Switch>
        </HashRouter>
    }
}

export default App;
