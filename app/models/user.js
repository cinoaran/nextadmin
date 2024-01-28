const mongoose = require("mongoose");
import bcrypt from "bcryptjs";

const addressSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  street1: {
    type: String,
    required: true,
  },
  street2: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  province: {
    type: String,
  },
  zip: {
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
  verified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isMerchant: {
    type: Boolean,
    default: false,
  },
  isUser: {
    type: Boolean,
    default: true,
  },
  status: {
    type: String,
    enum: ["Done", "Pending", "Cancelled"],
  },
  shippingAddress: addressSchema,
  billingAddress: addressSchema,
});
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
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
