import mongoose, { Schema } from 'mongoose';

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  creator: {
    type: String,
    required: true
  },
  members: {
    type: [String],
    required: true
  },
  admins: {
    type: [String],
    required: true,
  }
}, {timestamps: true});

const GroupModel = mongoose.model('group', GroupSchema);

export default GroupModel;
