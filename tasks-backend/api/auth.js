const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')
const User = require('../model/User')

module.exports = app => {
    // Funcao para gerar a hash da senha
    const generateHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    // Funcao para criar um usuario
    const signup = (req, res) => {

        generateHash(req.body.password, async (hash) => {
            const password = hash

            // Se já existir esse email cadastrado
            await User.findOne({ email: req.body.email }) && res.status(400).send('Esse email já foi cadastrado')

            await new User({
                name: req.body.name,
                email: req.body.email,
                password
            }).save()
            .then(_ => res.status(204).send())
            .catch(err => res.status(400).json(err))
                
        })
    }

    const signin = async (req, res) => {
        if (!req.body.email || !req.body.password) return res.status(400).send('Dados incompletos')

        const user = await User.findOne({ email: req.body.email })

        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                if (err || !isMatch) return res.status(401).send('Senha incorreta')

                const payload = { id: user._id }
                res.json({
                    name: user.name,
                    email: user.email,
                    token: jwt.encode(payload, authSecret),
                })
            })
        } else {
            res.status(400).send('Email não cadastrado!')
        }
    }

    return { signin, signup }
}