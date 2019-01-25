import React, { Component } from 'react';
import axios from 'axios'
import EditUserForm from './EditUserForm';
import Idea from '../Ideas/Idea'
import styled from 'styled-components'

const PageStyles = styled.div`
    text-align: center;
`

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

    createNewIdea = () => {
        const userId = this.props.match.params.userId
        axios.post(`/api/users/${userId}/ideas`).then((res) => {
            console.log(res.data)
            this.getSingleUser()
        })
    }

    render() {
        return (
            <PageStyles>
                <h1>{this.state.user.username}'s Ideas</h1>
                <p>Password: {this.state.user.password}</p>
                <div><button onClick={this.toggleEditUserForm}>Edit User</button></div>
                <div>
                    <button onClick={this.createNewIdea}>Add Idea</button>
                </div>
                {this.state.editFormVisible ? <EditUserForm
                    getSingleUser={this.getSingleUser}
                    userId={this.state.user._id}
                    toggleEditUserForm={this.toggleEditUserForm}
                /> : null}
                <div><button onClick={this.deleteUser}>Delete User</button></div>
                    <Idea user={this.state.user}
                    getSingleUser={this.getSingleUser}
                    />
            </PageStyles>
        );
    }
}

export default SingleUser;