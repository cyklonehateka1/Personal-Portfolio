import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  date: new Date(),
});

export default mongoose.model("Comment", CommentSchema);
