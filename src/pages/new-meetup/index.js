import NewMeetupForm from "../../../components/meetups/NewMeetupForm";
const NewMeetupPage = () => {
  const addmeetup = (obj) => {
    console.log(obj);
  };
  return (
    <>
      <NewMeetupForm onAddMeetup={addmeetup} />
    </>
  );
};
export default NewMeetupPage;
