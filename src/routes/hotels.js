import { Router } from "express";
import {
  createHotel,
  deleteHotelById,
  getAllHotels,
  getHotelById,
  updateHotel,
} from "../controller/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = Router();

router.route("/").post(verifyAdmin, createHotel);

router.route("/:id").put(verifyAdmin, updateHotel);

router.route("/").get(getAllHotels);

router.route("/:id").get(getHotelById);

router.route("/:id").delete(verifyAdmin, deleteHotelById);

export default router;
