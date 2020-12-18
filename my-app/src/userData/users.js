const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const { v4: uuidV4 } = require('uuid');

let exportedMethods = {

  async getUser(name, password) {
    const userCollection = await users();
    const user = await userCollection.find({
      $and: [
             { name : name },
             { password: password }
           ]
    }).toArray();
    if(!user)throw 'password or name incorrect!';
    return user; 
  },

  async addUser(name, email, password) {
    const userCollection = await users();

    let newUser = {
      name: name,
      _id: uuidV4(),
      email: email,
      password: password
      
    };
    const newInsertInformation = await userCollection.insertOne(newUser);
    //console.log("newInsertInformation is: "+newInsertInformation);
    if (newInsertInformation.insertedCount === 0) throw 'Insert failed!'; 
  }

};

module.exports = exportedMethods;