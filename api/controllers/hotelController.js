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
    const {min, max, ...others} = req.query
    try {
      const hotels = await Hotel.find({...others, 
        cheapestPrice:{$gte:min | 1, $lte:max || 999}}).limit(req.query.limit);
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
  async countByCity(req, res, next) {
    const cities = req.query.cities.split(",");
    try {
      const list = await Promise.all(
        cities.map((city) => {
          city = city[0].toUpperCase() + city.slice(1);
          return Hotel.countDocuments({ city: city });
        })
      );
      res.status(200).json(list);
    } catch (error) {
      next(error);
    }
  }
  async countByType(req, res, next) {
    try {
      const hotelCount = await Hotel.countDocuments({type:"hotel"});
      const apartmentCount = await Hotel.countDocuments({type:"apartment"});
      const resortCount = await Hotel.countDocuments({type:"resort"});
      const villaCount = await Hotel.countDocuments({type:"villa"});
      const cabinCount = await Hotel.countDocuments({type:"cabin"});
      
      res.status(200).json([
        {type:"hotels", count:hotelCount},
        {type:"apartments", count:apartmentCount},
        {type:"resorts", count:resortCount},
        {type:"villas", count:villaCount},
        {type:"cabins", count:cabinCount},
      ]);
    } catch (error) {
      next(error);
    }
  }
}

export default new HotelController();