import { Hotel } from "../models/Hotel.js";
import { createError } from "../utils/error.js";

const createHotel = async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(createError(error));
  }
};

const updateHotel = async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(createError(error));
  }
};

const getAllHotels = async (req, res, next) => {
  try {
    const hotel = await Hotel.find();
    res.status(200).json(hotel);
  } catch (error) {
    next(createError(error));
  }
};

const getHotelById = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    res.status(200).json(hotel);
  } catch (error) {
    next(createError(error));
  }
};

const deleteHotelById = async (req, res, next) => {
  try {
    const hotel = await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({ msg: "deleted", data: hotel });
  } catch (error) {
    next(createError(error));
  }
};

export {
  createHotel,
  updateHotel,
  getAllHotels,
  getHotelById,
  deleteHotelById,
};
