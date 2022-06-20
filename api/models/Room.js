import mongoose from 'mongoose';

const { Schema } = mongoose;

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    roomPrice: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    roomNumbers: {
      type: [
        {
          number: Number,
          unavailableDates: { type: [Date] },
        },
      ],
    },
  },
  { timestamps: true },
);

export default mongoose.model('Room', RoomSchema);
