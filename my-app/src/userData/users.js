const mongoCollections = require('../config/mongoCollections');
const users = mongoCollections.users;
const comment = mongoCollections.comment;
const favor = mongoCollections.favor;
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
  },
  async addComment(info) {
    const commentCollection = await comment();
    let newCom = {
      title: info.title,
      content: info.content,
    };
    const newInsertInformation = await commentCollection.insertOne(newCom);
    if (newInsertInformation.insertedCount === 0) throw 'Insert comment failed!';
    return await this.getComment(newInsertInformation.insertedId);
  },
  async getComment(id) {
    const commentCollection = await comment();
    const commentinfo = await commentCollection.findOne({ _id: id });
    if (!commentinfo) throw 'Not find this comment!';
    return commentinfo;
  },
  async getAllComment() {
    const commentCollection = await comment();
    const commentinfolist = await commentCollection.find().toArray();
    if (!commentinfolist) throw 'No Comment!';
    return commentinfolist;
  },
  async SetAllLike() {
    const likeCollection = await favor();
    let newLike = {
      like: 0,
      dislike: 0
    };
    const newInsertInformation = await likeCollection.insertOne(newLike);
    if (newInsertInformation.insertedCount === 0) throw 'Insert failed!';
    return await this.GetAllLike();
  },
  async GetAllLike() {
    const likeCollection = await favor();
    const Favorinfo = await likeCollection.find().toArray();
    if (!Favorinfo) throw 'Not find this hero!';
    return Favorinfo[0];
  },
  async UpdateAllLike(input) {
    const likeCollection = await favor();
    const info = await this.GetAllLike();
    let updateLike = {
      like: info.like,
      dislike: info.dislike
    };
    if (input.flag) {
      updateLike = {
        like: info.like + 1,
        dislike: info.dislike
      };
    }else{
      updateLike = {
        like: info.like - 1,
        dislike: info.dislike
      };
    }
    console.log(info._id);
    const updateInfo = await likeCollection.updateOne({ _id: info._id }, { $set: updateLike });
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update like failed';
    return await this.GetAllLike();
  },
  async UpdateAllDislike(input) {
    const likeCollection = await favor();
    const info = await this.GetAllLike();
    let updateDislike = {
      like: info.like,
      dislike: info.dislike
    };
    if (input.flag) {
      updateDislike = {
        like: info.like,
        dislike: info.dislike + 1
      };
    }else{
      updateDislike = {
        like: info.like,
        dislike: info.dislike - 1
      };
    }
    const updateInfo = await likeCollection.updateOne({ _id: info._id }, { $set: updateDislike });
    if (!updateInfo.matchedCount && !updateInfo.modifiedCount) throw 'Update dislike failed';
    return await this.GetAllLike();
  }
};

module.exports = exportedMethods;