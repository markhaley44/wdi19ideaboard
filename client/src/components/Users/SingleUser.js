import React, { Component } from 'react';
import axios from 'axios'
import EditUserForm from './EditUserForm';

class SingleUser extends Component {
    state = {
        user: {
            ideas: [{}]
        },
        editFormVisible: false
    }

    componentDidMount() {
        this.getSingleUser()
    }

    getSingleUser = () => {
        const userId = this.props.match.params.userId
        axios.get(`/api/users/${userId}`)
            .then((res) => {
                this.setState({ user: res.data })
            })
    }

    deleteUser = () => {
        const userId = this.props.match.params.userId
        axios.delete(`/api/users/${userId}`)
            .then(() => this.props.history.goBack())
    }

    toggleEditUserForm = () => {
        this.setState({ editFormVisible: !this.state.editFormVisible })
    }


    render() {
        return (
            <div>
                <h1>{this.state.user.username}'s Ideas</h1>
                <p>Password: {this.state.user.password}</p>

                <div><button onClick={this.toggleEditUserForm}>Edit User</button></div>
                {this.state.editFormVisible ? <EditUserForm
                    getSingleUser={this.getSingleUser}
                    userId={this.state.user._id}
                    toggleEditUserForm={this.toggleEditUserForm}
                /> : null}
                <div><button onClick={this.deleteUser}>Delete User</button></div>

                {this.state.user.ideas.map((idea, i) => (
                    <div key={i}>
                        <h3>{idea.title}</h3>
                        <p>{idea.description}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default SingleUser;