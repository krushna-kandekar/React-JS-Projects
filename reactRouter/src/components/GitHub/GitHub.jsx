import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function GitHub() {
  const data = useLoaderData();

  // lading API 1st Approch (without optimized)

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/krushna-kandekar")
  //       .then((responce) => responce.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <div className="text-white text-center m-4 bg-gray-600 p-4 text-3xl  flex flex-col justify-center items-center">
      GitHub Followers : {data.followers}
      <img
        className="m-6 w-90"
        src={data.avatar_url}
        alt="Git Picture"
        width={300}
      />
    </div>
  );
}

export default GitHub;

// lading API 2st Approch (with optimized)
export const githubInfoLoader = async () => {
  const responce = await fetch("https://api.github.com/users/krushna-kandekar");
  return responce.json();
};
