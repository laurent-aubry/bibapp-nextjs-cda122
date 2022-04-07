import dbConnect from "../../../utils/dbConnect";
// import Oeuvre from "../../../models/Oeuvre";
import Musique from "../../../models/Musique";


export default async function handler(req, res) {

  const { method } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const oeuvres = await Musique.find(
          {}
        ); /* find all the data in our database */
        res.status(200).json({ success: true, data: oeuvres });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const oeuvre = await Musique.create(
          req.body
        ); /* create a new model in the database */
        res.status(201).json({ success: true, data: oeuvre });
      } catch (error) {
        res
          .status(400)
          .json({ success: false, message: "Erreur de traitement.", error });
      }
      break;
    default:
      res
        .status(400)
        .json({ success: false, message: "Autre erreur de traitement." });
      break;
  }
}