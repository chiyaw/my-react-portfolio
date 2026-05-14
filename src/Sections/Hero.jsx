import React, { useEffect, useState } from "react";

const roles = ["FullStack", "Frontend", "Backend"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="h-screen bg-white text-black flex flex-col justify-center items-start mx-50"
    >
      <div className="text-xl font-bold text-gray-600">
        SHREYA SRIVASTAVA
      </div>

      <span className="font-semibold text-gray-800 text-9xl mx-4">
        {roles[index]}
      </span>

      <div className="text-6xl mt-4 mx-5">Developer</div>
    </section>
  );
}