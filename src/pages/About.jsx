import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-start items-center text-center p-6  min-h-screen">
      <div className="font-black text-4xl text-primary m-4 mt-8">
        About this App
      </div>
      <div className="text-lg text-gray-700 m-4 max-w-3xl leading-relaxed">
        <p className="mb-6">
          Climate change is one of the most pressing issues of our time. It
          affects us all, from rising sea levels to more frequent and severe
          weather events. The impact on our environment, health, and economies
          is profound and far-reaching.
        </p>
        <p className="mb-6">
          We all need to take action to help mitigate the effects of climate
          change. This includes reducing our carbon footprint, conserving
          energy, and supporting sustainable practices. Every small action
          counts and can contribute to a larger positive impact.
        </p>
        <p className="mb-6">
          This app is an attempt to help in our battle against the ever-growing
          problem that is climate change. By tracking and logging sustainable
          actions, we hope to encourage and inspire individuals to make more
          environmentally friendly choices in their daily lives.
        </p>
        <p className="mb-6">
          Together, we can make a difference and work towards a more sustainable
          future.
        </p>
      </div>
    </div>
  );
};

export default About;
