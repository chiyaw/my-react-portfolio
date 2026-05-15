import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-center text-center">
        <p className="text-sm md:text-base text-neutral-400 tracking-wide">
          Handcrafted by a human. No AI was harmed or used in making this website.
        </p>
      </div>
    </footer>
  );
}