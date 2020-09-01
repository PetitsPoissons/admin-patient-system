const { Procedure } = require('../models')

const procedureArr = [
  {
    "procedure_id": 1,
    "procedure_name": "Intake",
    "procedure_desc": "Psychiatric diagnostic interview examination",
    "cpt_code": "90791",
    "duration": "1 to 2 units/hours",
    "createdAt": "2020-08-30T14:17:45.000Z",
    "updatedAt": "2020-08-30T14:17:45.000Z"
  },
  {
    "procedure_id": 2,
    "procedure_name": "Individual psychotherapy - 30 mns",
    "procedure_desc": "Individual psychotherapy - 30 mns",
    "cpt_code": "90832",
    "duration": "30 minutes (.5 unit/hour)",
    "createdAt": "2020-08-30T14:17:55.000Z",
    "updatedAt": "2020-08-30T14:17:55.000Z"
  },
  {
    "procedure_id": 3,
    "procedure_name": "Individual psychotherapy - 45 mns",
    "procedure_desc": "Individual psychotherapy - 45 mns",
    "cpt_code": "90834",
    "duration": "45 minutes (1 unit/hour)",
    "createdAt": "2020-08-30T14:18:05.000Z",
    "updatedAt": "2020-08-30T14:18:05.000Z"
  },
  {
    "procedure_id": 4,
    "procedure_name": "Individual psychotherapy - 60 mns",
    "procedure_desc": "Individual psychotherapy - 60 mns",
    "cpt_code": "90837",
    "duration": "60 minutes (1 unit/hour) or longer based on units billed",
    "createdAt": "2020-08-30T14:18:15.000Z",
    "updatedAt": "2020-08-30T14:18:15.000Z"
  },
  {
    "procedure_id": 5,
    "procedure_name": "Family psychotherapy - w/o patient",
    "procedure_desc": "Family psychotherapy - without the patient present",
    "cpt_code": "90846",
    "duration": "1 to 2 units/hours",
    "createdAt": "2020-08-30T14:18:26.000Z",
    "updatedAt": "2020-08-30T14:18:26.000Z"
  },
  {
    "procedure_id": 6,
    "procedure_name": "Family psychotherapy - w/ patient",
    "procedure_desc": "Family psychotherapy (including conjoint) - with the patient present",
    "cpt_code": "90847",
    "duration": "1 to 2 units/hours",
    "createdAt": "2020-08-30T14:18:36.000Z",
    "updatedAt": "2020-08-30T14:18:36.000Z"
  },
  {
    "procedure_id": 7,
    "procedure_name": "Group psychotherapy",
    "procedure_desc": "Group psychotherapy",
    "cpt_code": "90853",
    "duration": "1 to 2 units/hours",
    "createdAt": "2020-08-30T14:18:45.000Z",
    "updatedAt": "2020-08-30T14:18:45.000Z"
  },
  {
    "procedure_id": 8,
    "procedure_name": "Testing",
    "procedure_desc": "Testing, psychological - submission of test results and evaluation of results are required by VCB",
    "cpt_code": "96101",
    "duration": "up to 8 units/hours",
    "createdAt": "2020-08-30T14:18:55.000Z",
    "updatedAt": "2020-08-30T14:18:55.000Z"
  },
  {
    "procedure_id": 9,
    "procedure_name": "Telehealth",
    "procedure_desc": "Telehealth, non-psychiatrist - limit 5 units/hours per VCB application",
    "cpt_code": "98968",
    "duration": "30 minutes (.5 unit/hour) to 1 unit/hour",
    "createdAt": "2020-08-30T14:19:04.000Z",
    "updatedAt": "2020-08-30T14:19:04.000Z"
  }
]

const seedProcedure = () => Procedure.bulkCreate(procedureArr)

module.exports = seedProcedure