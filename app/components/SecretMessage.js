"use client";

import { useState } from "react";

export const SecretMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="rounded-2xl bg-white p-6 text-center shadow-sm">
      <h2 className="text-lg font-bold">🔒 Нууц мессеж</h2>
      <p className="my-6 text-6xl">{isVisible ? "🔓" : "🔒"}</p>
      <button onClick={() => setIsVisible(!isVisible)} className="rounded-xl bg-purple-600 px-6 py-3 font-bold text-white">
        {isVisible ? "Нуух" : "Харах"}
      </button>
      {isVisible && <p className="mt-4 rounded-xl bg-purple-100 p-4 font-semibold">🎉 Чи useState-ийг ойлголоо!</p>}
    </div>
  );
};
