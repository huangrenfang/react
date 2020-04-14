import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class course extends Component {
    render() {
        return (
            <div>
                <h1>课程</h1>
                <ul>
                    <li><Link to="/course/1">html</Link></li>
                    <li><Link to="/course/2">react</Link></li>
                </ul>
            </div>
        );
    }
}

export default course; 