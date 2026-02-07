// src/components/StarbucksCards.jsx
import React from "react";
import "./App.jsx";

const products = [
  {
    name: "Fast",
    sub: "Our fast will serve you quickly",
    price: "7.45$",
    volume: "330 ml",
    image: "../public/6c93673c21dc6624f65c8b1ed6cb9ec98d1d7896.png", // oddiy takeaway cup (yoki o'zingiznikini qo'ying)
  },
  {
    name: "Fast",
    sub: "Our fast will serve you quickly",
    price: "7.45$",
    volume: "330 ml",
    image: "../public/ebd08a563c79bf622e64fa80af12f9fab8b82e86.png", // ikkinchi variant
  },
  {
    name: "Cappuccino",
    sub: "Our cappuccino is always exquisite",
    price: "7.45$",
    volume: "330 ml",
    image:
      "../public/67a38e4ac84b1a66573c20d377540939e66336d4.png", // kapuchino foam art
  },
];

const StarbucksCards = () => {
  return (
    <div className="bg-black min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl font-bold text-center mb-12 text-green-500">
        Starbucks
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-900 to-black rounded-3xl overflow-hidden shadow-2xl border border-gray-800 hover:border-green-600 transition-all duration-300 group"
          >
            {/* Yashil doira + stakan */}
            <div className="relative h-72 flex items-center justify-center pt-8">
              <div className="w-64 h-64 bg-[#006241] rounded-full flex items-center justify-center shadow-2xl shadow-green-900/70 group-hover:scale-105 transition-transform duration-500">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-56 h-56 object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Matnlar */}
            <div className="px-8 pb-10 text-center">
              <h2 className="text-4xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-400 mb-4">{product.sub}</p>

              <div className="flex items-baseline justify-center gap-3 mb-6">
                <span className="text-5xl font-extrabold">{product.price}</span>
                <span className="text-2xl text-gray-300">{product.volume}</span>
              </div>

              <button className="bg-[#006241] hover:bg-green-700 text-white font-bold text-xl py-4 px-12 rounded-full w-full transition-all duration-300 shadow-lg hover:shadow-green-800/50">
                Buy Product
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarbucksCards;
