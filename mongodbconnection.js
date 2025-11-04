var mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://faang:hello123@cluster0.l8nf5yw.mongodb.net/faang?appName=Cluster0"
  )
  .then(() => {
    console.log(" mongodb connected");
  })
  .catch(() => {
    console.log("Not connected");
  });
