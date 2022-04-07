import dbConnect from "../../../utils/dbConnect";
// import Oeuvre from "../../../models/oeuvre";
import Musique from "../../../models/Musique";

export default async function handler(req, res) {

  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const oeuvre = await Musique.findById(id);
        if (!oeuvre) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: oeuvre });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Edit a model by its ID */:
      try {
        const oeuvre = await Musique.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!oeuvre) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: oeuvre });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "DELETE" /* Delete a model by its ID */:
      try {
        const deletedOeuvre = await Musique.deleteOne({ _id: id });
        if (!deletedOeuvre) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
}