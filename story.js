
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/snapgram', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB:', err));


const storySchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required: true
  },
  story: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("story", storySchema);