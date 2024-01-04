import mongoose, { Schema } from "mongoose";

const roomSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    maxPeople: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [
      {
        number: Number,
        unavailableDates: [{ type: Date }],
      },
    ],
  },
  { timestamps: true }
);


export const Room = mongoose.model("Room", roomSchema);
