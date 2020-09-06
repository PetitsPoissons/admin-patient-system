const seedAccess = require('./seedAccess')
const seedClient = require('./seedClient')
const seedDx = require('./seedDx')
const seedIsDx = require('./seedIsDxed')
const seedProcedure = require('./seedProcedure')
const seedRecord = require('./seedRecord')
const seedRelation = require('./seedRelation')
const seedTx = require('./seedTx')
const seedUser = require('./seedUser')
const seedForm = require('./seedForm')

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: true })
    await seedAccess()
    await seedUser()
    await seedClient()
    await seedDx()
    await seedForm()
    await seedProcedure()
    await seedRelation()
    await seedIsDx()
    await seedTx()
    await seedRecord()

    process.exit(0)
}

seedAll()
