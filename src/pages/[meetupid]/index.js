import MeetupDetails from "../../../components/meetups/MeetupDetails";

const Meetupid = () => {
  return (
    <>
      <MeetupDetails
        image="https://s3.india.com/travel/wp-content/uploads/2017/10/Kolkata-city1.jpg"
        title="Kolkata"
        address="Kolkata"
        description="kolkata rasta"
      />
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          meetupid: "m1",
        },
      },
      {
        params: {
          meetupid: "m2",
        },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const meetupid = context.params.meetupid;
  console.log(meetupid);
  return {
    props: {
      meetupprops: {
        image:
          "https://s3.india.com/travel/wp-content/uploads/2017/10/Kolkata-city1.jpg",
        title: "Kolkata",
        address: "Kolkata",
        description: "kolkata rasta",
      },
    },
  };
}

export default Meetupid;
