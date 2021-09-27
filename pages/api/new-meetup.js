import { db } from "../config/firebase";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.add(data);
    res.status(200).json({ message: "Meetup inserted!" });
  }
}
export default handler;
