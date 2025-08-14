const Contact = require("../model/lead.model.js");

module.exports.submitFormShowroom = async (req, res) => {
  try {
    const {
      name,
      email,
      country_code,
      mobile_number,
      usertype,
      company_name,
      company_city,
    } = req.body;

    // Validation
    if (
      !name ||
      !email ||
      !country_code ||
      !mobile_number ||
      !usertype ||
      !company_name ||
      !company_city
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
      userType: usertype,
      companyName: company_name,
      companyCity: company_city,
      leadType: "showroom",
      place: "Showroom",
    });

    res.redirect("/form/thank-you");
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
      usertype,
      company_name,
      company_city,
    } = req.body;

    // Validation
    if (
      !name ||
      !email ||
      !country_code ||
      !mobile_number ||
      !usertype ||
      !company_name ||
      !company_city
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
      userType: usertype,
      companyName: company_name,
      companyCity: company_city,
      leadType: "event",
      place: "Metacia 2025",
    });
    res.redirect("/form/thankyou");
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Error in submitting form", error: error.message });
  }
};

module.exports.getEventAllLead = async (req, res) => {
  try {
    const leadData = await Contact.find({ leadType: "event" });
    return res
      .status(200)
      .json({ message: "Data fetched Sucessfully", LeadData: leadData });
  } catch (error) {
    res.status(500).json({ message: "Inetrnal server error" });
  }
};

module.exports.getShowroomAllLead = async (req, res) => {
  try {
    const leadData = await Contact.find({ leadType: "showroom" });
    return res
      .status(200)
      .json({ message: "Data fetched Sucessfully", LeadData: leadData });
  } catch (error) {
    res.status(500).json({ message: "Inetrnal server error" });
  }
};
