// models/Contact.js
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [3, "Name must be at least 3 characters long"],
      maxlength: [50, "Name cannot exceed 50 characters"],
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
    },

    countryCode: {
      type: String,
      required: [true, "Country code is required"],
      match: [/^\+\d{1,4}$/, "Invalid country code format"],
    },

    mobileNumber: {
      type: String,
      required: [true, "Mobile number is required"],
      match: [/^\d{7,15}$/, "Mobile number must be between 7 and 15 digits"],
    },

    service: {
      type: String,
      required: [true, "Service selection is required"],
      enum: ["Architect", "Tech Partner", "Trade Partner"],
    },

    companyName: {
      type: String,
      required: [true, "Company name is required"],
      trim: true,
      minlength: [2, "Company name must be at least 2 characters long"],
      maxlength: [100, "Company name cannot exceed 100 characters"],
    },

    companyAddress: {
      type: String,
      required: [true, "Company address is required"],
      trim: true,
      minlength: [10, "Address must be at least 10 characters long"],
      maxlength: [300, "Address cannot exceed 300 characters"],
    },

    event : {
        type : String , 
        default : "Metacia"
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
