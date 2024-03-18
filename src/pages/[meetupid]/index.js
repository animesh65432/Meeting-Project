import MeetupDetails from "../../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";

const Meetupid = (props) => {
  return (
    <>
      <MeetupDetails {...props.meetupprops} />
    </>
  );
};

export async function getStaticPaths() {
  let client;
  try {
    client = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5"
    );
    const db = client.db();
    const meetupCollections = db.collection("database");

    const meetups = await meetupCollections.find({}, { _id: 1 }).toArray();
    client.close();

    return {
      paths: meetups.map((obj) => ({
        params: {
          meetupid: obj._id.toString(),
        },
      })),
      fallback: false,
    };
  } catch (error) {
    console.error(error);
    if (client) client.close();
  }
}

export async function getStaticProps(context) {
  const meetupid = context.params.meetupid;

  try {
    const client = await MongoClient.connect(
      "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5"
    );
    const db = client.db();
    const meetupCollections = db.collection("database");

    const meetup = await meetupCollections.findOne({
      _id: new ObjectId(meetupid),
    });
    client.close();

    return {
      props: {
        meetupprops: {
          image: meetup.image,
          title: meetup.title,
          address: meetup.address,
          description: meetup.description,
        },
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        meetupprops: {},
      },
    };
  }
}

export default Meetupid;
