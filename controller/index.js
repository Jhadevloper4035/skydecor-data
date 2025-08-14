const Contact = require("../model/lead.model.js");

module.exports.submitFormShowroom = async (req, res) => {
  try {
    const {
      name,
      email,
      country_code,
      mobile_number,
      userType,
      company_name,
      company_address,
    } = req.body;

    // Validation
    if (
      !name ||
      !email ||
      !country_code ||
      !mobile_number ||
      !userType ||
      !company_name ||
      !company_address
    ) {
      return res
        .status(400)
        .json({ message: "Invalid details. Please fill all required fields." });
    }

    // Save to DB
    await Contact.create({
      fullName: name,
      email,
      countryCode: country_code,
      mobileNumber: mobile_number,
      userType: userType,
      companyName: company_name,
      companyAddress: company_address,
      place : "Showroom"
    });

    res.status(201).json({ message: "Lead generated successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error in submitting form", error: error.message });
  }
};

module.exports.submitFormEvent = async (req, res) => {
  try {
    const {
      name,
      email,
      country_code,
      mobile_number,
      userType,
      company_name,
      company_address,
    } = req.body;

    // Validation
    if (
      !name ||
      !email ||
      !country_code ||
      !mobile_number ||
      !userType ||
      !company_name ||
      !company_address
    ) {
      return res
        .status(400)
        .json({ message: "Invalid details. Please fill all required fields." });
    }

    // Save to DB
    await Contact.create({
      fullName: name,
      email,
      countryCode: country_code,
      mobileNumber: mobile_number,
      userType: userType,
      companyName: company_name,
      companyAddress: company_address,
      place: "Metacia 2025",
    });

    res.status(201).json({ message: "Lead generated successfully" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error in submitting form", error: error.message });
  }
};


