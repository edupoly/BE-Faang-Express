var mongoose = require("mongoose");

var reviewsSchema = mongoose.Schema({
  username: String,
  review: String,
  rating: Number,
  timeStamp: Date,
});

var ReviewModoel = mongoose.model("review", reviewsSchema);
module.exports = ReviewModoel;
