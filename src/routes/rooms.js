import { Router } from "express";
import {
  createRoom,
  deleteRoomById,
  getAllRooms,
  getRoomById,
  updateRoom,
} from "../controller/Room.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = Router();

router.route("/:hotelid").post(verifyAdmin, createRoom);

router.route("/:id").put(verifyAdmin, updateRoom);

router.route("/").get(getAllRooms);

router.route("/:id").get(getRoomById);

router.route("/:id/:hotelid").delete(verifyAdmin, deleteRoomById);

export default router;


