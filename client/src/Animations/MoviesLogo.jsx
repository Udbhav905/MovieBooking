import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/MOVIES.json"; 

const LottieAnimation = () => {
  return (
    <div>
      <Lottie animationData={animationData} loop={true} className="w-36 h-auto" />
    </div>
  );
};

export default LottieAnimation;