const db = require('../../data/db-config.js')

const getAll = () => {
  return db('cars')
}

const getById = (id) => {
  return db('cars')
  .where('car_id', id)
  .first()
}

const create = () => {
  
}

module.exports = { getAll, getById, create}
