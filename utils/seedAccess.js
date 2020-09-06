const { Access } = require('../models')

const accessArr = [
  {
    "access_id": 1,
    "access_type": "superuser",
    "access_desc": "complete access throughout",
    "createdAt": "2020-08-30T14:05:39.000Z",
    "updatedAt": "2020-08-30T14:05:39.000Z"
  },
  {
    "access_id": 2,
    "access_type": "administrator",
    "access_desc": "access and edit all data, except for access privileges and data related to security and authentication",
    "createdAt": "2020-08-30T14:05:48.000Z",
    "updatedAt": "2020-08-30T14:05:48.000Z"
  },
  {
    "access_id": 3,
    "access_type": "clinician",
    "access_desc": "access and edit own clients only (documentation, notes, billing, and reports)",
    "createdAt": "2020-08-30T14:05:58.000Z",
    "updatedAt": "2020-08-30T14:05:58.000Z"
  },
  {
    "access_id": 4,
    "access_type": "basic",
    "access_desc": "access and edit user, client descriptive data as well diagnosis and procedure libraries but cannot see any data related to clinical interventions (documentation, notes and reports on clients)",
    "createdAt": "2020-08-30T14:06:09.000Z",
    "updatedAt": "2020-08-30T14:06:09.000Z"
  },
  {
    "access_id": 5,
    "access_type": "biller",
    "access_desc": "manage billing for all clients, but cannot see any data related to clinical interventions (documentation, notes and reports on clients)",
    "createdAt": "2020-08-30T14:06:20.000Z",
    "updatedAt": "2020-08-30T14:06:20.000Z"
  }
]

const seedAccess = () => Access.bulkCreate(accessArr)

module.exports = seedAccess;