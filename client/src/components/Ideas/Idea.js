import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios';

const PostIt = styled.form`
    height: 200px;
    width: 200px;
    background-color: beige;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    input {
        background-color: beige;
    }

    textarea {
        background-color: beige;
    }
`

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`

class Idea extends Component {
    state = {
        idea: {
            title: '',
            description: ''
        }
    }

    handleChange = (event, ideaId) => {
        console.log(ideaId)
        this.props.user.ideas.forEach((idea) => {
            if(ideaId === idea._id) {
                // this.setState({idea: idea})
                updatedState[event.target.name] = event.target.value
            }
        })
        const updatedState = { ...this.state.idea }
        this.setState({ idea: updatedState })
    }

    handleSubmit = (event, ideaId) => {
        event.preventDefault()
        const payload = this.state.idea
        axios.patch(`/api/ideas/${ideaId}`, payload)
        .then(() => this.props.getSingleUser)
    }

    deleteIdea = (event, ideaId) => {
        event.preventDefault()
        console.log(ideaId)
        axios.delete(`/api/ideas/${ideaId}`).then(() => {
            this.props.getSingleUser()
        })
    }

    render() {
        return (
            <FlexContainer>
                {this.props.user.ideas.map((idea, i) => (
                        <PostIt onBlur={(event) => this.handleSubmit(event, idea._id)} key={i}>
                            <button onClick={(event)=> this.deleteIdea(event, idea._id)}>x</button>
                            <div><input onChange={(event)=> this.handleChange(event, idea._id)} type="text" name="title" value={idea.title}></input></div>
                            <div><textarea onChange={(event)=> this.handleChange(event, idea._id)} type="text" name="description" value={idea.description}></textarea></div>
                        </PostIt>
                    ))}        
            </FlexContainer>
        );
    }
}

export default Idea;        