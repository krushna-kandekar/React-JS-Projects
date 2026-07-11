import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user)
    return (
      <div className="h-25 bg-gray-400 flex justify-center items-center text-4xl font-bold text-gray-900">
        Please Login
      </div>
    );

  return (
    <div className="bg-gray-400 h-25 flex justify-center items-center text-4xl font-bold text-gray-800">
      Welcome: {user.username}
    </div>
  );
}

export default Profile;
