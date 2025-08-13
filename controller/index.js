const Contact = require("../model/lead.model.js");

module.exports.submitForm = async (req, res) => {
  try {
    const data = req.body;

    const newLead = await Contact.create(data);
    newLead.save();

       res.status(201).json({ message: "Lead generated successfully" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error in subiting form", error });
  }
};
