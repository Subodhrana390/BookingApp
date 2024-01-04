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

[
  {
    number: 101,
    unavailableDates: [],
  },
  {
    number: 102,
    unavailableDates: [],
  },
  {
    number: 103,
    unavailableDates: [],
  },
];

export const Room = mongoose.model("Room", roomSchema);
