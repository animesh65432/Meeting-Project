import axios from "axios";
import NewMeetupForm from "../../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
const NewMeetupPage = () => {
  const router = useRouter();
  const addmeetup = async (obj) => {
    let response = await axios.post("/api/new-meetup", obj);
    console.log(response);
    router.push("/");
  };
  return (
    <>
      <NewMeetupForm onAddMeetup={addmeetup} />
    </>
  );
};

export default NewMeetupPage;
