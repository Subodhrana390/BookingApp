import { Router } from "express";
import {
  createHotel,
  deleteHotelById,
  getAllHotels,
  getHotelById,
  updateHotel,
} from "../controller/hotel.js";
const router = Router();

router.route("/").post(createHotel);

router.route("/:id").put(updateHotel);

router.route("/").get(getAllHotels);

router.route("/:id").get(getHotelById);

router.route("/:id").delete(deleteHotelById);

export default router;
