var express = require("express");
var router = express.Router();
var LeadModel = require("./leads.model");
const leadController = require("./leads.controller");

router.get("/getAllLeads", leadController.getAllLeads);

router.post("/addNewLead", leadController.addLead);

router.put("/updateLead/:phonennumber", leadController.updateLeadByPhoneNumber);

router.put(
  "/updateLeadFeedback/:phonenumber",
  leadController.updateLeadFeedback
);

router.delete("/deleteLead/:phonenumber", leadController.deleteLead);

module.exports = router;
