import { HashRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router'; 
import * as React from 'react';
import { Basic, Interface, Class, Func, Navigator, Genericity } from './views';

class App extends React.Component {
    render() {
        return <HashRouter>
            <Switch>
                <Route path="/" exact component={Navigator} />
                <Route path="/basic" component={Basic} />
                <Route path="/interface" component={Interface} />
                <Route path="/class" component={Class} />
                <Route path="/func" component={Func} />
                <Route path="/genericity" component={Genericity} />
            </Switch>
        </HashRouter>
    }
}

export default App;
