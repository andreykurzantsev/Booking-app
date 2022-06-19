import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../middleware/errorHandler.js";

class RoomController {
  async createRoom(req, res, next) {
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);
    try {
      const savedRoom = await newRoom.save();
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $push: {
            rooms: savedRoom._id
          },
        });
      } catch (error) {
        next(error);
      }
      res.status(200).json(savedRoom);
    } catch (error) {
      next(error);
    }
  }
  async giveAllRooms(req, res, next) {
    try {
      const rooms = await Room.find();
      res.status(200).json(rooms);
    } catch (error) {
      next(error);
    }
  }
  async giveOneRoom(req, res, next) {
    try {
      const room = await Room.findById(req.params.id);
      res.status(200).json(room);
    } catch (error) {
      next(error);
    }
  }
  async updateRoom(req, res, next) {
    try {
      const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id, {
          $set: req.body
        }, {
          new: true
        });
      res.status(200).json(updatedRoom);
    } catch (error) {
      next(error);
    }
  }
  async updateRoomAvailability(req, res, next) {
    try {
      await Room.updateOne({
        "roomNumbers._id": req.params.id
      }, {
        $push: {
          "roomNumbers.$.unavailableDates": req.body.dates
        }
      });
      res.status(200).json("Room status has been updated.");
    } catch (error) {
      next(error);
    }
  }
  async deleteRoom(req, res, next) {
    const hotelId = req.params.hotelId;
    try {
      await Room.findByIdAndDelete(req.params.id);
      try {
        await Hotel.findByIdAndUpdate(hotelId, {
          $pull: {
            rooms: req.params.id
          },
        });
      } catch (error) {
        next(error);
      }
      res.status(200).json(`room with id: '${req.params.id}' deleted succesfully`);
    } catch (error) {
      next(error);
    }
  }
}

export default new RoomController();