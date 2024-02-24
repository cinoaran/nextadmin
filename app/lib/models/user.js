const mongoose = require("mongoose");
import bcrypt from "bcryptjs";

const billingAddressSchema = new mongoose.Schema({
  billingCountry: {
    type: String,
    required: true,
  },
  billingStreetMain: {
    type: String,
    required: true,
  },
  billingStreetAdditive: {
    type: String,
  },
  billingCity: {
    type: String,
    required: true,
  },
  billingLand: {
    type: String,
  },
  billingZip: {
    type: String,
    required: true,
  },
});

const shippingAddressSchema = new mongoose.Schema({
  shippingCountry: {
    type: String,
    required: true,
  },
  shippingStreetMain: {
    type: String,
    required: true,
  },
  shippingStreetAdditive: {
    type: String,
  },
  shippingCity: {
    type: String,
    required: true,
  },
  shippingLand: {
    type: String,
  },
  shippingZip: {
    type: String,
    required: true,
  },
});

const userSchema = new mongoose.Schema({
  avatar: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  range: {
    type: String,
    enum: ["isAdmin", "isOffice", "isMerchant", "isCustomer"],
    default: "isCustomer",
  },
  status: {
    type: String,
    enum: ["Done", "Pending", "Cancelled"],
  },
  onlyBilling: {
    type: Boolean,
    default: true,
  },
  shippingAddress: shippingAddressSchema,
  billingAddress: billingAddressSchema,
});
userSchema.methods.matchPassword = async function (enteredPassword) {
  const isMatch = await bcrypt.compare(enteredPassword, this.password);
  return isMatch;
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
