const User = require('../models/User')
const Idea = require('../models/Idea')

const ideasController = {
    index: (req, res) => {
        var userId = req.params.userId
        User.findById(userId).populate('ideas')
            .then((user) => {
                res.send(user.ideas)
            })
    },
    show: (req, res) => {
        var ideaId = req.params.ideaId
        Idea.findById(ideaId)
            .then((idea) => {
                res.send(idea)
            })
    }

}

module.exports = ideasController