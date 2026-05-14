import React from "react";

const projects = [
  {
    title: "Lita - Real Time Chat App",
    description:
      "A real-time chat application built with the MERN stack and Socket.io for live messaging.",
    tech: ["React.js", "Tailwind CSS", "Javascript", "Vercel", "Socket.io"],
    image1:
      "https://res.cloudinary.com/db3ksjj2j/image/upload/v1777741852/Screenshot_2026-05-02_at_10.38.44_PM_qjpmot.png",
    image2:
      "https://res.cloudinary.com/db3ksjj2j/image/upload/v1777741853/Screenshot_2026-05-02_at_10.39.52_PM_pkakgl.png",
    github: "https://github.com/chiyaw/chat-app",
    live: "http://34.198.65.127",
    article: "/lita",
  },
  {
    title: "Flogram - A Social Media Website",
    description:
      "A social media website that let user create an account - post their photo - like each others photo - follow other.",
    image1:
      "https://res.cloudinary.com/db3ksjj2j/image/upload/v1778781889/Screenshot_2026-05-14_at_11.34.41_PM_jllc9u.png",
    image2:
      "https://res.cloudinary.com/db3ksjj2j/image/upload/v1778782063/Screenshot_2026-05-14_at_11.37.35_PM_fuqh8l.png",
    github: "https://github.com/chiyaw/B-Flogram",
    live: "https://b-flogram-7fx6.vercel.app/login",
    article: "/flogram",
  },
  {
    title: "Bookmark App",
    description:
      "A secure, Google-authenticated bookmark manager built with Next.js App Router and Supabase.",
    tech: [
      "Next.js",
      "OAuth",
      "Javascript",
      "TailwindCSS",
      "PostgreSQL",
      "Supabase Realtime",
    ],
    image1:
      "https://res.cloudinary.com/db3ksjj2j/image/upload/v1774522311/SBA_rbhj3w.png",
    image2:
      "https://res.cloudinary.com/db3ksjj2j/image/upload/v1774529790/Screenshot_2026-03-26_at_6.26.10_PM_bgiapc.png",
    github: "https://github.com/chiyaw/bookmark-app",
    live: "https://bookmark-app-tawny.vercel.app/",
    article: "/bookmark-app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="m-8 p-8 text-gray-700">
      <div className="max-w-7xl mx-auto px-15">
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row justify-between gap-10"
            >
              <div className="flex flex-col max-w-lg">
                <h3 className="text-3xl font-extrabold">
                  {project.title}
                </h3>

                <p className="mt-5 leading-relaxed">
                  {project.description}
                </p>

                <div className=" flex flex-row gap-2 items-center">

                {project.article && (
                  <a href={project.article} className=" w-40 px-4 py-2 my-4 inline-flex items-center gap-3 bg-black text-white justify-center rounded-2xl font-semibold hover:scale-105 transition duration-300">
                    View Detail
                  </a>
                  
                )}
                {project.live && (
                  <a href={project.live} className="h-10 flex items-center rounded-2xl border-2 border-dashed border-black bg-white px-4 font-semibold uppercase text-black transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-0 active:translate-y-0 active:rounded-2xl active:shadow-none">
                    Live Project
                  </a>
                  
                )}
                </div>
              </div>

      
              <div className="flex flex-col gap-4">
                <img
                  src={project.image1}
                  alt={project.title}
                  className="w-100 h-55 object-cover rounded-xl rotate-6 hover:rotate-0 transition duration-300 hover:-translate-y-6 hover:scale-110"
                />
                <img
                  src={project.image2}
                  alt={project.title}
                  className="w-100 h-55 object-cover rounded-xl -rotate-12 hover:rotate-0 transition duration-300 hover:-translate-y-6 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}