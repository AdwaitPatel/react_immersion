import { useContext } from "react";
import { UserContext } from "./UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.role}</p>
    </>
  );
}

export default Profile;