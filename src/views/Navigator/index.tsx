import * as React from 'react';
import { Link } from 'react-router-dom';
declare const require: any;
const styles = require('./style.less');

class Routes extends React.Component {
    render() {
        return <ul className={styles.list}>
            <li><Link to='/basic'>Basic</Link></li>
            <li><Link to='/interface'>Interface</Link></li>
            <li><Link to='/class'>Class</Link></li>
            <li><Link to='/func'>Func</Link></li>
        </ul>
    }
}

export default Routes;
