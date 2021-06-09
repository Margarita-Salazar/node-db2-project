const Cars = require('./cars-model')

const checkCarId = (req, res, next) => {
  const id = req.params.id

  Cars.getById(id)
  .then(car=>{
    if(car){
      req.car = car
    }
    else{
      next({
        status: 404,
        message: `Car with ${id} ID not found`
      })
    }
  })
  .catch(next)
}

const checkCarPayload = (req, res, next) => {
  
}

const checkVinNumberValid = (req, res, next) => {
  
}

const checkVinNumberUnique = (req, res, next) => {
  
}

module.exports = {
  checkCarId,
  checkCarPayload,
  checkVinNumberValid,
  checkVinNumberUnique
}