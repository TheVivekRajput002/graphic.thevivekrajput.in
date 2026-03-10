"use client"
import { useState } from "react";

export default function Toggle() {
  const [on, setOn] = useState(false);

  return (
    <div className="flex items-center justify-center ">
      <button
        onClick={() => setOn(!on)}
        className={`relative w-6 h-4 rounded-full transition-colors duration-300 focus:outline-none ${
          on ? "bg-zinc-500" : "bg-zinc-800"
        }`}
      >
        <span
          className={`absolute top-[4px] left-0 w-2 h-2 bg-white rounded-full shadow-md transition-transform duration-300 ${
            on ? "translate-x-3" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
}