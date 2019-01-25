import React, { Component } from 'react';
import axios from axios

class UserList extends Component {
    state = {
        users: [{}]
    }
    componentDidMount() {
        this.getAllUsers()
    }
    getAllUsers = () => {
        axios.get(`api/users`)
            .then((res) => this.setState({ users: res.data }))
    }
    render() {
        return (
            <div>
                <h1>Hey from the user view</h1>
                {this.state.users.map((user, i) =>
                    <div key={i}>
                        <h3>{user.username}</h3>
                    </div>)}
            </div>
        )
    }
}