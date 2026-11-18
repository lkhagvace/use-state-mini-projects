"use client";

import { useState } from "react";

const sizes = ["S", "M", "L"];
const sizeNames = { S: "Жижиг", M: "Дунд", L: "Том" };
const sizePrices = { S: 15000, M: 20000, L: 25000 };

export const PizzaBuilder = () => {
  const [size, setSize] = useState("M");
  const [cheese, setCheese] = useState(false);
  const [mushroom, setMushroom] = useState(false);
  const [pepper, setPepper] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const onePizza = sizePrices[size] + (cheese ? 3000 : 0) + (mushroom ? 2000 : 0) + (pepper ? 1000 : 0);
  const total = onePizza * quantity;

  return (
    <div className="mx-auto max-w-md rounded-3xl bg-white p-6 shadow-sm">
      <h1 className="text-2xl font-bold">🍕 Пицца угсрах</h1>

      <p className="mt-6 font-semibold">Хэмжээ</p>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {sizes.map((item) => {
          return (
            <button
              key={item}
              onClick={() => setSize(item)}
              className={size === item ? "rounded-xl bg-orange-500 p-3 text-white" : "rounded-xl border border-slate-200 p-3"}
            >
              <span className="block font-bold">{sizeNames[item]}</span>
              <span className="text-sm">{sizePrices[item]}₮</span>
            </button>
          );
        })}
      </div>

      <p className="mt-6 font-semibold">Нэмэлт</p>
      <div className="mt-2 grid grid-cols-3 gap-2">
        <button
          onClick={() => setCheese(!cheese)}
          className={cheese ? "rounded-xl bg-green-600 p-3 text-white" : "rounded-xl border border-slate-200 p-3"}
        >
          🧀 Бяслаг<span className="block text-sm">+3000₮</span>
        </button>
        <button
          onClick={() => setMushroom(!mushroom)}
          className={mushroom ? "rounded-xl bg-green-600 p-3 text-white" : "rounded-xl border border-slate-200 p-3"}
        >
          🍄 Мөөг<span className="block text-sm">+2000₮</span>
        </button>
        <button
          onClick={() => setPepper(!pepper)}
          className={pepper ? "rounded-xl bg-green-600 p-3 text-white" : "rounded-xl border border-slate-200 p-3"}
        >
          🌶️ Чинжүү<span className="block text-sm">+1000₮</span>
        </button>
      </div>

      <p className="mt-6 font-semibold">Тоо ширхэг</p>
      <div className="mt-2 flex items-center gap-4">
        <button
          onClick={() => setQuantity(quantity - 1)}
          disabled={quantity === 1}
          className="h-10 w-10 rounded-full bg-slate-900 text-xl text-white disabled:bg-slate-300"
        >
          −
        </button>
        <span className="w-6 text-center text-2xl font-bold">{quantity}</span>
        <button
          onClick={() => setQuantity(quantity + 1)}
          disabled={quantity === 5}
          className="h-10 w-10 rounded-full bg-slate-900 text-xl text-white disabled:bg-slate-300"
        >
          +
        </button>
      </div>

      <div className="mt-6 rounded-2xl bg-orange-50 p-4">
        <p className="font-semibold">
          {sizeNames[size]} пицца · {cheese && "🧀 "}
          {mushroom && "🍄 "}
          {pepper && "🌶️ "}
          {!cheese && !mushroom && !pepper && "нэмэлтгүй"}
        </p>
        <p className="text-sm text-slate-500">Нэг пицца: {onePizza}₮</p>
        <p className="mt-2 text-3xl font-bold">Нийт: {total}₮</p>
      </div>
    </div>
  );
};
