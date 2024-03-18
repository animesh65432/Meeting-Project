import MeetupList from "../../components/meetups/MeetupList";

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
  return {
    props: {
      meetups: dummymeetups,
    },
  };
}
export default Homepage;
