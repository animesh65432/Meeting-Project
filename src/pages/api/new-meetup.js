import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method == "POST") {
    const data = req.body;

    let clinet = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5"
    );
    const db = clinet.db();

    const meetupcolletcions = db.collection("database");
    let result = await meetupcolletcions.insertOne(data);
    console.log(result);
    clinet.close();

    res.status(202).json({ messege: "Sucessfully Creatded " });
  }
}

export default handler;
