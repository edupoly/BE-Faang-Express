db.orders.aggregate([
  {
    $addFields: { total: { $multiply: ["$price", "$quantity"] } },
  },
]);
