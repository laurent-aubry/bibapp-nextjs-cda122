import mongoose from "mongoose";

const musiqueSchema = new mongoose.Schema({
  auteur: { type: String, required: true },
  annee: { type: String, required: true },
  titre: { type: String, required: true },
  imageUrl: { type: String, required: true },
});

export default mongoose.models.Musique ||
  mongoose.model("Musique", musiqueSchema);