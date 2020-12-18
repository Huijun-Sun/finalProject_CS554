const dbConnection = require('../config/mongoConnection');
const Function = require('./users');
async function main() {
    const db = await dbConnection();
    await db.dropDatabase();
    const like = await Function.SetAllLike();
    console.log(like);
    console.log('Done seeding database');
    await db.serverConfig.close();
}
main().catch((error) => {
    console.error(error);
    return dbConnection().then((db) => {
        return db.serverConfig.close();
    });
});