import MeetupList from "../../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const dummymeetups = [
  {
    id: 1,
    title: "A first Meetup",
    image:
      "https://cdn.britannica.com/91/110191-050-7BCFD56B/Victoria-Memorial-Hall-Kolkata-India.jpg",
    address: "Some address city",
    description: "This is the Goot Meetup",
  },
];

const Homepage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  let clinet = await MongoClient.connect(
    "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.1.5"
  );
  const db = clinet.db();
  const meetupcolletcions = db.collection("database");

  const meetups = await meetupcolletcions.find().toArray();
  clinet.close();
  return {
    props: {
      meetups: meetups.map((obj) => {
        return {
          id: obj._id.toString(),
          image: obj.image,
          title: obj.title,
          address: obj.address,
          title: obj.title,
        };
      }),
    },
    revalidate: 10,
  };
}
export default Homepage;
