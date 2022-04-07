import mongoose from "mongoose";

const oeuvreSchema = new mongoose.Schema({
  auteur: { type: String, required: true },
  annee: { type: String, required: true },
  titre: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

export default mongoose.models.Oeuvre ||
  mongoose.model("Oeuvre", oeuvreSchema);