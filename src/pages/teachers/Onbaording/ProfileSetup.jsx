import { useNavigate } from "react-router-dom";
import TextInput from "../../../components/TextInput";

const ProfileSetup = () => {
  const navigate = useNavigate()
  return (
    <div className=" h-screen flex flex-col p-8">
      <div className="mb-8">
        <h1 className="font-bold text-3xl">Learn X</h1>
      </div>
      <div className=" flex-1 flex items-center justify-center ">
        <div className="w-1/3">
          <h1 className="font-semibold text-2xl text-center">Personal Details</h1>
          <form action="" className="flex flex-col gap-4 my-4 items-center ">
            <TextInput placeholder="Name" />
            <TextInput placeholder="Bio" />
            <TextInput placeholder="Experience" />
            <TextInput placeholder="Upload Profile Picture" />
            <TextInput placeholder="Set Availability & Teaching Preference" />
            <div className="w-5/6 flex gap-4 px-2 items-center justify-center">
              <button onClick={()=>{navigate('/teacher/profileSetup2')}} type="button" className="w-fit bg-blue-400 px-8 py-2 rounded-3xl cursor-pointer">
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;
