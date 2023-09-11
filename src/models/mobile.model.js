const mongoose = require("mongoose");

const mobileSchema = new mongoose.Schema(
  {
    mobile_company_name: {
      type: String,
      trim: true,
    },
    mobile_model_name: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
    },
    product_see: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Mobile = mongoose.model("mobiles", mobileSchema);
module.exports = Mobile;
