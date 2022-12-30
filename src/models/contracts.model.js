const mongoose = require("mongoose");

const contractsSchema = new mongoose.Schema(
  {
    principle: { type: Number, required: true },
    interest: { type: Number, required: true },
    loan_start_date: { type: String, required: true },
    loan_due_date: { type: String, required: true },
    lender_id: { type: String, required: true },
    borrower_id: { type: String, required: true },

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("contracts", contractsSchema);
