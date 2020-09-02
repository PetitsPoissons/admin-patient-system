const { Relation } = require('../models')

const relationArr = [
  {
    "relation_id": 1,
    "user_id": "6c808d65-ff34-4e35-a87c-cbe3724cfef9",
    "client_id": "008229bf-2006-4262-894b-e4ae22561ec7",
    "start_date": "2020-01-03 18:42:23",
    "end_date": "2020-01-10 18:42:23"
  },
  {
    "relation_id": 2,
    "user_id": "926bbf97-3956-49b9-8815-d4ee6882be01",
    "client_id": "008229bf-2006-4262-894b-e4ae22561ec7",
    "start_date": "2020-01-17 18:42:23"
  },
  {
    "relation_id": 3,
    "user_id": "926bbf97-3956-49b9-8815-d4ee6882be01",
    "client_id": "13a64c44-bb67-42d3-b7c1-4e0452ad311b",
    "start_date": "2020-01-17 17:42:23"
  },
  {
    "relation_id": 4,
    "user_id": "a4694d93-3ccc-4ddf-87de-237da04b04a1",
    "client_id": "e012b3e7-074e-43ab-9af2-2372360302c6",
    "start_date": "2020-01-24 17:42:23"
  },
  {
    "relation_id": 5,
    "user_id": "75981688-b1a5-4ed8-98d6-83950f103eff",
    "client_id": "e3f6979d-e2bd-4afe-87c9-67a2e6571864",
    "start_date": "2020-01-10 17:42:23"
  }
]

const seedRelation = () => Relation.bulkCreate(relationArr)

module.exports = seedRelation