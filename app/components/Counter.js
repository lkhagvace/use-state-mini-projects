"use client";

import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
      <h2 className="text-lg font-bold">🔢 Тоолуур</h2>
      <p className="my-6 text-6xl font-bold">{count}</p>
      <div className="flex justify-center gap-3">
        <button onClick={() => setCount(count - 1)} className="h-12 w-12 rounded-full bg-slate-900 text-2xl text-white">
          −
        </button>
        <button onClick={() => setCount(count + 1)} className="h-12 w-12 rounded-full bg-slate-900 text-2xl text-white">
          +
        </button>
      </div>
    </div>
  );
};
