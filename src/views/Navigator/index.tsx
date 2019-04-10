import * as React from 'react';
import { Link } from 'react-router-dom';

class Routes extends React.Component {
    render() {
        return <ul>
            <li><Link to='/basic'>Basic</Link></li>
            <li><Link to='/interface'>Interface</Link></li>
            <li><Link to='/class'>Class</Link></li>
            <li><Link to='/func'>Func</Link></li>
        </ul>
    }
}

export default Routes;
