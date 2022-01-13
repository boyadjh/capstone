import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
  poster: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  groups: {
    type: [String],
    required: true
  }
}, {timestamps: true});


const PostModel = mongoose.model('post', PostSchema);

export default PostModel;
