import mongoose from "mongoose";
import CommentModel from "./CommentModel.js";

const BlogPostSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    comments: {
      type: [CommentModel],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Blog", BlogPostSchema);
