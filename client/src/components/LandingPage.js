import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1>Hello, welcome to the landing page!</h1>
                <Link to="/users">
                    <button>Log In</button>
                </Link>
            </div>
        );
    }
}

export default LandingPage;