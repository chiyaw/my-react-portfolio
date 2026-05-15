import React from "react";
import { IoIosSend } from "react-icons/io";


export default function Detail() {
  return (
    <section
      id="detail"
      className="min-h-[90vh] flex items-center justify-around px-6  text-black">

      <div className="max-w-3xl w-1/2 text-left m-4 px-10">
        <h2 className="text-black text-5xl mb-4">
          Hi there
        </h2>

        <p className="text-lg leading-relaxed flex-wrap text-gray-700 text-justify">
          I'm Shreya, A Full Stack Developer with proven experience building production-grade web apps using React.js, Next.js, Node.js, and PostgreSQL. I've shipped real features — a JWT-based SSO system handling 1,000+ users, a full database migration with zero data loss, and tools that actually moved metrics. Being comfortable across the stack means I can take an idea from concept to deployment without losing momentum.</p>
        <p className="text-lg leading-relaxed mb-10 text-gray-700 text-justify">Outside of dev work, I'm writing a novel, which keeps the problem-solving muscle sharp in a completely different way. I box and train regularly — the same focus and drive that gets you through a hard round also gets you through a hard sprint. Always open to hearing about interesting projects, so feel free to reach out.</p>

        <a
          href='mailto:shhreyasrivastava@gmail.com'
          className="inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition duration-300"
        >
          <IoIosSend />
          Send me a message
        </a>

      </div>
     <div className="w-1/2 flex justify-center items-center">
  <div className="relative w-fit">
    <img 
      className="h-150 w-100 object-cover -scale-x-100 " 
      src="https://res.cloudinary.com/db3ksjj2j/image/upload/v1778781805/img_rdjpk0.jpg" 
      alt="Profile"
    />
    <p className="absolute -top-20 right-4 flex flex-col gap-1 items-center text-4xl font-extrabold text-white drop-shadow-sm">
      <span className="text-black">P</span>
      <span className="text-black">R</span>
      <span>O</span>
      <span>F</span>
      <span>I</span>
      <span>L</span>
      <span>E</span>
    </p>
    
  </div>
</div>


    </section>
  );
}