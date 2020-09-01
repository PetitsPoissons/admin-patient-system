const seedAccess = require('./seedAccess')
const seedClient = require('./seedClient')
const seedDx = require('./seedDx')
const seedIsDx = require('./seedIsDxed')
const seedProcedure = require('./seedProcedure')
const seedRecord = require('./seedRecord')
const seedRelation = require('./seedRelation')
const seedTx = require('./seedTx')
const seedUser = require('./seedUser')

const sequelize = require('../config/connection')

const seedAll = async () => {
    await sequelize.sync({ force: true })
    await seedAccess()
    await seedClient()
    await seedDx()
    await seedIsDx()
    await seedProcedure()
    await seedRecord()
    await seedRelation()
    await seedTx()
    await seedUser()

    process.exit(0)
}

seedAll()
