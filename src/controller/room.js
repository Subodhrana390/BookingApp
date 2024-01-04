import { Room } from "../models/Room.js";
import { Hotel } from "../models/Hotel.js";
import { createError } from "../utils/error.js";

const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);
  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};

const updateRoom = async (req, res) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    next(createError(error));
  }
};

const getAllRooms = async (req, res, next) => {
  try {
    const room = await Room.find();
    res.status(200).json(room);
  } catch (error) {
    next(createError(error));
  }
};

const getRoomById = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(createError(error));
  }
};

const deleteRoomById = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json({ msg: "deleted", data: Room });
  } catch (error) {
    next(createError(error));
  }
};

export { createRoom, updateRoom, getAllRooms, getRoomById, deleteRoomById };
