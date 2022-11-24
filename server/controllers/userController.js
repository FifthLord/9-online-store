const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Basket } = require('../models/models')

const generateJwt = (id, email, role) => {
   return jwt.sign({ id, email, role },
      process.env.SECRET_KEY,
      { expiresIn: '24h' }
   )
}

class UserController {
   async registration(req, res, next) {
      const { email, password, role } = req.body
      if (!email || !password) {
         return next(ApiError.badRequest('wrong email or password'))
      }
      // перевірка на існування емейлу
      const candidate = await User.findOne({ where: { email } })
      if (candidate) {
         return next(ApiError.badRequest('a user with this email already exists'))
      }
      // хєшування паролю
      const hashPassword = await bcrypt.hash(password, 5)
      // безпосередне створення юзеру
      const user = await User.create({ email, role, password: hashPassword })
      // створення корзини юзера
      const basket = await Basket.create({ userId: user.id })
      // створення вєб токену
      const token = generateJwt(user.id, user.email, user.role)
      return res.json({ token })
   }

   async login(req, res, next) {
      const { email, password } = req.body
      const user = await User.findOne({ where: { email } })
      if (!user) {
         return next(ApiError.internal('user not found'))
      }
      // перевірка паролю який ввів корискувач з паролем в БД
      let comparePassword = bcrypt.compareSync(password, user.password)
      if (!comparePassword) {
         return next(ApiError.internal('wrong password'))
      }
      const token = generateJwt(user.id, user.email, user.role)
      return res.json({ token })
   }

   async check(req, res, next) {
      const { id } = req.query
      if (!id) {
         return next(ApiError.badRequest('ID not set'))
      }
      res.json(id)
   }
}


module.exports = new UserController()