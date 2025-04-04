import mongoose from 'mongoose';

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  author: {
    name: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  publishedAt: {
    type: Date,
    default: Date.now,
  },
  readTime: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

export default mongoose.models.BlogPost || mongoose.model('BlogPost', blogPostSchema); 