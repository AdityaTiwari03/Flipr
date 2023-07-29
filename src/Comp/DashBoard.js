import React, { useState } from "react";
import Icon from "../Images/SvgjsG1021.png";

const Dashboard = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    age: 30,
    address: "123 Main St, City",
    photoUrl: "https://via.placeholder.com/150", // Dummy photo URL
  });

  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Dummy array of places
  const dummyPlaces = [
    { id: 1, title: "Place A" },
    { id: 2, title: "Place B" },
    { id: 3, title: "Place C" },
    { id: 4, title: "Place D" },
    { id: 5, title: "Place E" },
    // Add more places as needed
  ];

  // Filter places based on search term
  const filteredPlaces = dummyPlaces.filter((place) =>
    place.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logged out!");
  };

  const handleChangeDetails = () => {
    // Implement your change details logic here
    console.log("Change details clicked!");
  };

  return (
    <div className="container mx-auto p-4">
      {/* User Info */}
      <div className="max-w-lg mt-3 mx-auto bg-white p-4 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          <img
            src={Icon}
            alt="User"
            className="rounded-full w-52 h-52 object-cover mb-4 md:mb-0 md:mr-4"
          />
          <div>
            <h2 className="text-3xl font-semibold">{user.name}</h2>
            <p className="text-gray-600 text-xl">Age: {user.age}</p>
            <p className="text-gray-600 text-xl">Address: {user.address}</p>
          </div>
        </div>
      </div>

      {/* Search Place */}
      <div className="mt-4">
        <div className="text-3xl mt-2 font-cursive">
          <i>Your Bookmarked Places.....</i>
        </div>
        <input
          type="text"
          placeholder="Search place..."
          className="w-full px-4 py-2 mt-10 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* List of Places */}
      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-4">Places</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {filteredPlaces.map((place) => (
            <li
              key={place.id}
              className="bg-white p-4 rounded-md shadow-md flex items-center justify-between"
            >
              <span>{place.title}</span>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
                Go
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md mr-4"
          onClick={handleChangeDetails}
        >
          Change Details
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded-md"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
