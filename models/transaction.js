const mongoose = require("mongoose");

const schema = mongoose.Schema;

const transactionSchema = new schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for transaction"
    },
    value: {
      type: Number,
      required: "Enter an amount"
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
);

const transaction = mongoose.model("Transaction", transactionSchema);

module.exports = transaction;