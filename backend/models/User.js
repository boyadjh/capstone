import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import bcrypt from 'bcrypt';

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // groups: {
  //   type: [{
  //     id: {
  //       type: String,
  //       required: true
  //     },
  //     name: {
  //       type: String,
  //       required: true
  //     },
  //     category: {
  //       type: Number,
  //       required: true
  //     }
  //   }],
  //   required: true
  // }
}, {timestamps: true});

UserSchema.pre('save', async function (next) {
  const user = this;
  this.password = await bcrypt.hash(user.password, 10);
  this.fullName = user.firstName + ' ' + user.lastName;
  next();
});

UserSchema.methods.validatePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
}

UserSchema.methods.toJSON = function() {
  let obj = this.toObject();
  delete obj.password;
  return obj;
}

UserSchema.plugin(uniqueValidator);

const UserModel = mongoose.model('user', UserSchema);

export default UserModel;
