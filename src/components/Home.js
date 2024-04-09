import React from 'react';
import sampleImage1 from "../assets/gallery/1.jpg";
import sampleImage2 from "../assets/gallery/2.jpg";
import sampleImage3 from "../assets/gallery/3.jpg";


const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to Fitness Haven</h1>
        <p>
          At Fitness Haven, we are dedicated to helping you achieve your fitness goals and lead a healthier lifestyle.
          Whether you're a beginner or an experienced athlete, our state-of-the-art facilities and expert trainers are here to support you every step of the way.
        </p>
        <img src={sampleImage1} alt="Sample 1" className="sample-image" />
      </div>
      <div className="facilities-section">
        <h1>Our Facilities</h1>
        <p>
          Our gym features top-of-the-line equipment for all your workout needs. From cardio machines and free weights to strength training equipment and group fitness classes, we have everything you need to get in shape and stay active.
        </p>
        <img src={sampleImage2} alt="Sample 2" className="sample-image" />
      </div>
      <div className="personal-training-section">
        <h1>Personal Training</h1>
        <p>
          Looking for personalized guidance and motivation? Our certified personal trainers are here to create custom workout plans tailored to your specific goals and fitness level. Whether you're aiming to lose weight, build muscle, or improve your overall health, our trainers will provide the support and accountability you need to succeed.
        </p>
        <img src={sampleImage3} alt="Sample 3" className="sample-image" />
      </div>
      <div className="join-us-section">
        <h1>Join Us Today</h1>
        <p>
          Ready to take the first step towards a healthier you? Visit Fitness Haven today to tour our facilities, meet our team, and sign up for a membership. We can't wait to help you on your fitness journey!
        </p>
      </div>
    </div>
  );
};

export default Home;
