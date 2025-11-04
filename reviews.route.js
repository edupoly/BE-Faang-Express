var express = require("express");
var router = express.Router();
var ReviewModel = require("./reviews.model");

router.get("/getAllReviews", (req, res) => {
  ReviewModel.find().then((data) => {
    res.send(data);
  });
});
router.post("/addNewReview", (req, res) => {
  console.log(req.body);
  var newReview = new ReviewModel({ ...req.body, timeStamp: Date.now() });
  newReview.save();
  res.send("Cheddam Aaagu");
});
router.get("/getReviewById/:id", (req, res) => {
  ReviewModel.findById(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send({ msg: err });
    });
});
router.delete("/deleteReviewById/:id", (req, res) => {
  console.log(req.params);
  ReviewModel.findByIdAndDelete(req.params.id)
    .then(() => {
      res.send({ msg: "ipoindi ra babu" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ msg: "avvaledu ra babu" });
    });
});
router.put("/updateReviewById/:id", (req, res) => {
  console.log(req.params);
  console.log(req.body);
  ReviewModel.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.send({ msg: "ipoindi ra babu" });
    })
    .catch((err) => {
      console.log(err);
      res.send({ msg: "avvaledu ra babu" });
    });
});
module.exports = router;
