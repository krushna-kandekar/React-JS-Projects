import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div className="flex justify-center items-center h-180 ">
      <div className=" rounded-4xl w-120 h-120 p-18 m-8 bg-blue-300 shadow-lg">
        <div>
          <h2 className="text-5xl m-4 font-bold text-gray-950 ">Login</h2>
          <input
            className="border-none text-3xl h-15 w-full p-3 m-4 bg-yellow-50 rounded-md hover:bg-white"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Username"
          />{" "}
          <br />
          <input
            className="border-none text-3xl h-15 w-full p-3 m-4 bg-yellow-50 rounded-md hover:bg-white"
            type="text"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />{" "}
          <br />
          <button
            className="bg-blue-700 h-15 mt-6 m-4 p-3 w-full text-3xl font-normal rounded-lg text-white cursor-pointer hover:bg-blue-800"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
