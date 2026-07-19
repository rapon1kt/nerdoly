import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

export const UserModel = models.User || model("User", UserSchema);
