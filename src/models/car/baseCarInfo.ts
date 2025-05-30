export const baseCarInfo = {
  Image: { type: String, required: false },
  ImageStatus: {
    type: String,
    enum: ["Available", "Coming Soon", "Removed"],
    default: "Available",
  },
  Class: { type: String, required: true },
  Brand: { type: String, required: true },
  Model: { type: String, required: true },
  Rarity: { type: String },
  Obtainable_Via: { type: String },
  Country: { type: String },
  ObtainableVia: { type: String },
  Stars: { type: Number },
  KeyCar: { type: Boolean, default: false },
  Added: { type: String },
  Added_With: { type: String, default: null },
  Added_Date: { type: String },
  Tags: { type: String },
  Cost_Epic: { type: Number, default: null },

  // ✅ No trailing comma above this
  normalizedKey: { type: String, required: true, unique: true }
};
