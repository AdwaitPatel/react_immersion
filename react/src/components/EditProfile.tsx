import { useContext } from "react";
import { UserContext } from "./UserContext";

function EditProfile() {
  const { user, setUser } = useContext(UserContext);

  const changeName = () => {
    setUser({
      ...user,
      name: "John Doe",
    });
  };

  return (
    <button onClick={changeName}>
      Change Name
    </button>
  );
}

export default EditProfile;