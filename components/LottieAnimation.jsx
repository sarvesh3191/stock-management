import React from "react";
import Lottie from "lottie-react";
import aiAnimation from "../public/animations/ai-human-like.json"; // Place your animation JSON file here

const LottieAnimation = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <Lottie animationData={aiAnimation} loop={true} className="w-96 h-96" />
    </div>
  );
};

export default LottieAnimation;