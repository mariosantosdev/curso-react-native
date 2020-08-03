const { authSecret } = require('../.env')
const jwt = require('jwt-simple')
const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    // Funcao para gerar a hash da senha
    const generateHash = (password, callback) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, null, (err, hash) => callback(hash))
        })
    }

    // Funcao para criar um usuario
    const signup = (req, res) => {

        generateHash(req.body.password, hash => {
            const password = hash

            app.db('users')
                /*
                    CONFIGURAR EMAIL REPETIDO
                */
                .insert({ name: req.body.name, email: req.body.email, password })
                .then(_ => res.status(204).send())
                .catch(err => res.status(400).json(err))
        })
    }

    const signin = async (req, res) => {
        if (!req.body.email || !req.body.password) return res.status(400).send('Dados incompletos')

        const user = await app.db('users')
            .where({ email: req.body.email })
            .first()

        if (user) {
            bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
                if (err || !isMatch) return res.status(401).send('Senha incorreta')

                const payload = { id: user.id }
                console.log()
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