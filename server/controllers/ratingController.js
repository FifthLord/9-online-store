const { Rating } = require('../models/models')
const ApiError = require('../error/ApiError')

class RatingController {
   // async create(req, res) {
   //    const { name } = req.body
   //    const rating = await Rating.create({ name })
   //    return res.json(rating)
   // }

   // async getAll(req, res) {
   //    const rating = await Rating.findAll()
   //    return res.json(rating)
   // }

}

module.exports = new RatingController()