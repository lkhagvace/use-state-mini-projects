"use client";

import { useState } from "react";

export const LightSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className={isOn ? "rounded-2xl bg-yellow-100 p-6 text-center shadow-sm" : "rounded-2xl bg-slate-800 p-6 text-center text-white shadow-sm"}>
      <h2 className="text-lg font-bold">💡 Гэрэл</h2>
      <p className="my-6 text-6xl">{isOn ? "💡" : "🌑"}</p>
      <button onClick={() => setIsOn(!isOn)} className="rounded-xl bg-yellow-400 px-6 py-3 font-bold text-slate-900">
        {isOn ? "Унтраах" : "Асаах"}
      </button>
    </div>
  );
};
