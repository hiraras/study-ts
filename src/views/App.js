import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router'; 
import * as React from 'react';
import Basic from './Basic/index.tsx';
import Interface from './Interface/index.tsx';
import Routes from './Routes/index.tsx';

class App extends React.Component {
    render() {
        return <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Routes} />
                <Route path="/basic" component={Basic} />
                <Route path="/interface" component={Interface} />
            </Switch>
        </BrowserRouter>
    }
}

export default App;
