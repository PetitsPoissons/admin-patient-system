const { IsDiagnosed } = require('../models')

const isDxArr = [
  {
    "id": 1,
    "relation_id": 1,
    "dx_id": 1,
    "dx_date": "2020-01-03 18:42:23"
  },
  {
    "id": 2,
    "relation_id": 1,
    "dx_id": 3,
    "dx_date": "2020-01-10 18:42:23"
  },
  {
    "id": 3,
    "relation_id": 2,
    "dx_id": 4,
    "dx_date": "2020-01-17 18:42:23"    
  },
  {
    "id": 4,
    "relation_id": 3,
    "dx_id": 2,
    "dx_date": "2020-01-17 18:42:23"    
  },
  {
    "id": 5,
    "relation_id": 4,
    "dx_id": 5,
    "dx_date": "2020-01-24 18:42:23"    
  },
  {
    "id": 6,
    "relation_id": 5,
    "dx_id": 4,
    "dx_date": "2020-01-10 18:42:23"    
  }
]

const seedIsDx = () => IsDiagnosed.bulkCreate(isDxArr)

module.exports = seedIsDx