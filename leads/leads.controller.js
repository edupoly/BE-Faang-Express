var LeadModel = require("./leads.model");

async function getAllLeads(req, res) {
  var data = await LeadModel.find({});
  res.send(data);
}

async function addLead(req, res) {
  var newLead = new LeadModel(req.body);
  await newLead.save();
  res.send("New Lead added");
}

function updateLeadByPhoneNumber(req, res) {
  LeadModel.findOneAndUpdate(
    { phonenumber: req.params.phonenumber },
    { $set: { ...req.body } }
  ).then((data) => {
    res.send(data);
  });
}

function updateLeadFeedback(req, res) {
  var feedback = { text: req.body.text, timeStamp: Date.now() };
  LeadModel.findOneAndUpdate(
    { phonenumber: req.params.phonenumber },
    { $push: { feedback: { ...feedback } } }
  ).then((data) => {
    res.send(data);
  });
}
function deleteLead(req, res) {
  LeadModel.findOneAndDelete({ phonenumber: req.params.phonenumber }).then(
    (data) => {
      res.send(data);
    }
  );
}
module.exports = {
  getAllLeads,
  addLead,
  updateLeadByPhoneNumber,
  updateLeadFeedback,
  deleteLead,
};
