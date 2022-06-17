import Hotel from "../models/Hotel.js";

class HotelController {
  async createHotel(req, res, next) {

    const newHotel = new Hotel(req.body);

    try {
      const savedHotel = await newHotel.save();
      res.status(200).json(savedHotel);
    } catch (error) {
      next(error);
    }
  }
  async giveAllHotels(req, res, next) {
    try {
      const hotels = await Hotel.find();
      res.status(200).json(hotels);
    } catch (error) {
      next(error);
    }
  }
  async giveOneHotel(req, res, next) {
    try {
      const hotel = await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
    } catch (error) {
      next(error);
    }
  }
  async updateHotel(req, res, next) {
    try {
      const updatedHotel = await Hotel.findByIdAndUpdate(
        req.params.id, {
          $set: req.body
        }, {
          new: true
        });
      res.status(200).json(updatedHotel);
    } catch (error) {
      next(error);
    }
  }
  async deleteHotel(req, res, next) {
    try {
      await Hotel.findByIdAndDelete(
        req.params.id);
      res.status(200).json(`hotel with id: '${req.params.id}' deleted succesfully`);
    } catch (error) {
      next(error);
    }
  }
}

export default new HotelController();