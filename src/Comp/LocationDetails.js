import React, { useState, useEffect } from 'react';
import img from "../Images/marquee-travel-paris-800x450.jpg"
import Rating from '@mui/material/Rating';
import ReactPlayer from 'react-player';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Imggallery from './Imggallery';
const locationData = {
    image: { img }, // Replace with a local image URL
    location: 'Paris',
    info: `Paris is the capital city of France. It is known for its iconic Eiffel Tower, Louvre Museum, and charming streets lined with cafes and bakeries. The city boasts a rich history dating back to the Roman era, and its architecture showcases a blend of styles from different periods. Paris is a cultural hub, home to world-famous art, literature, and fashion. Visitors can explore famous landmarks like Notre-Dame Cathedral, Montmartre, and the Champs-Élysées. The Seine River flows through the heart of the city, offering picturesque boat tours. Paris is also renowned for its culinary delights, offering delectable pastries, cheeses, and fine dining experiences. The city's romantic ambiance makes it a popular destination for couples, while its museums and galleries cater to art enthusiasts. Whether you're strolling along the Seine, sipping coffee at a sidewalk cafe, or admiring the city lights at night, Paris promises an unforgettable experience.`,
    rating: 3.5,
  };
      
  const dummyComments = [
    {
      id: 1,
      user: 'User1',
      comment: 'This place is amazing!',
      rating: 4.5,
    },
    {
      id: 2,
      user: 'User2',
      comment: 'Had a great time in Paris!',
      rating: 5.0,
    },
    {
      id: 3,
      user: 'User3',
      comment: 'The architecture is breathtaking!',
      rating: 4.0,
    },
    {
      id: 4,
      user: 'User4',
      comment: 'I loved the museums!',
      rating: 4.5,
    },
    {
      id: 5,
      user: 'User5',
      comment: 'Delicious pastries everywhere!',
      rating: 4.8,
    },
    // Add more comments and ratings here if needed
  ];export default function LocationDetails() {
    const [bookmark, setBookmark] = useState(false);

    const handleBookmarkChange = (event) => {
      setBookmark(event.target.checked);
    };
  return (
    <div className=" justify-center">
      <div className="location-info bg-white rounded-lg shadow-lg p-6">
        <ReactPlayer
        url="https://www.youtube.com/watch?v=t0NLDP1MmqI" // Replace with the URL of your video
          width="100%"
          height="700px"
          playing // Autoplay the video
          loop // Loop the video
          muted // Ensure the video is muted for autoplay
          playsinline // Play inline on mobile devices
        /><div className='flex justify-center mt-10'>
<FormControlLabel
  control={
    <Switch
      checked={bookmark}
      size="large" // Set the size prop to "large" to increase the switch size
      sx={{
        transform: "scale(1.5)", // Adjust the scale factor as needed
      }}
      onChange={handleBookmarkChange}
    />
  }
  label="Bookmark"
/></div><div>
<div className='w-8/9 m-auto mt-10'>
<Imggallery originalHeight height="700px"/>
</div>
        </div>        <div className="text-4xl mt-10 mb-4 font-cursive">
          <i>{locationData.location}</i>
        </div>
        <p className="text-gray-600 text-xl mb-8">{locationData.info}</p>

        <div className=" w-full md:w-1/2 flex-col justify-center m-auto">
          <h3 className="text-3xl font-bold mb-10">User Comments:</h3>
          {dummyComments.map((comment) => (
            <div key={comment.id} className="comment flex flex-col md:flex-row justify-between">
              <strong className="font-semibold text-xl">{comment.user}</strong>
              <div className='flex flex-row h-12 text-xl'>
              
              <p>{comment.comment}</p></div>
              <div className='flex flex-row justify-between text-xl'>
              <span className="ml-2 text-lg font-semibold text-yellow-500  text-xl">
                  {comment.rating}
                </span>

              <Rating name="read-only" value={comment.rating} readOnly /></div>

            </div>
          ))}
        </div>
      </div>
    </div>  );
};
