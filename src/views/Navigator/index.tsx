import * as React from 'react';
import { Link } from 'react-router-dom';

class Routes extends React.Component {
    render() {
        return <ul>
            <li><Link to='/basic'>basic</Link></li>
            <li><Link to='/interface'>interface</Link></li>
        </ul>
    }
}

export default Routes;
