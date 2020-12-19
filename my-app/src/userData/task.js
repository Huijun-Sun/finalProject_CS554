const dbConnection = require('../config/mongoConnection');
const Function = require('./users');
const userExample = {
    name: "admin",
    email:"admin@admin.com",
    password:"admin"
};
const commentlist = [
    {
        title: "Example1",
        content: "Example1"
    },
    {
        title: "Example2",
        content: "Example2"
    }
];
const exampleLikenum = 10
async function main() {
    const db = await dbConnection();
    await db.dropDatabase();
    const user = await Function.addUser(userExample.name,userExample.email,userExample.password);
    const like = await Function.SetAllLike(exampleLikenum);
    for (var i = 0; i < commentlist.length; i++) {
        const comment = await Function.addComment(commentlist[i]);
    }
    console.log('Done seeding database');
    await db.serverConfig.close();
}
main().catch((error) => {
    console.error(error);
    return dbConnection().then((db) => {
        return db.serverConfig.close();
    });
});