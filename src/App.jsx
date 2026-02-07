import React from "react";
import "./App.css";
import"./card.jsx";

function App() {
  return (
    <>
      <header className="w-full h-16 bg-[#121517]">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between">
            <img src="/StarBucks.png" alt="StarBucks Logo" />
            <ul className="flex gap-10">
              <li className="text-white">Home</li>
              <li className="text-white">Select</li>
              <li className="text-white">Shop</li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container ">
        <main className="w-full h-150 flex items-center justify-between ">
          <div className="">
            <h1 className="text-white text-6xl">
              New Cafe <br /> by
              <span className="  text-[#35C66B]">StarBucks</span>
            </h1>
            <br />
            <br />
            <p className=" text-white">
              Have time to buy the most harmonious drinks in the <br /> new
              Starbucks coffee and don't forget about the discount!
            </p>
            <br />
            <br />
            <div className="flex gap-4 mt-6">
              <button className=" w-50 h-9    bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition">
                Select a coffee
              </button>
              <button className="   w-30 h-9    bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-md transition">
                More
              </button>
              <br />
              <br />
              <br />
            </div>
            <div className="flex gap-10 ">
              <div className="">
                <h1 className="text-white text-6xl">
                  9k <span className="text-[#35C66B]">+</span>
                </h1>
                <p className="text-white">
                  Premium <br /> Users
                </p>
              </div>
              <div className="">
                <h1 className="text-white text-6xl">
                  2k <span className="text-[#35C66B]">+</span>
                </h1>
                <p className="text-white">
                  Happy <br /> Customer
                </p>
              </div>
              <div className="">
                <h1 className="text-white text-6xl">
                  28<span className="text-[#35C66B]">+</span>
                </h1>
                <p className="text-white">
                  Awards <br /> Winning
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <img src="../public/67a38e4ac84b1a66573c20d377540939e66336d4.png" alt="" />
          </div>
          <br /><br /><br /><br /><br /><br /><br /><br />
        </main>
      </div>
      <div className="flex align-center justify-center">
        <div className="relative bg-white rounded-2xl shadow-lg p-6 max-w-3xl w-full mx-auto flex align-center justify-center">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center"></div>
              <div>
                <img src="../public/YURE.png" alt="" />
                <h3 className="font-semibold text-gray-900">Tasty</h3>
                <p className="text-sm text-gray-500">
                  We have the most delicious coffee
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center"></div>
              <div>
                <img src="../public/SAMALYOT.png" alt="" />
                <h3 className="font-semibold text-gray-900">Fast</h3>
                <p className="text-sm text-gray-500">
                  Our cafe will serve you quickly
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-gray-100 flex items-center justify-center"></div>
              <div>
                <img
                  src="../public/725e9b84b72767cb4dd6a4aed64507cf51d26b6a.png"
                  alt=""
                />
                <h3 className="font-semibold text-gray-900">Available</h3>
                <p className="text-sm text-gray-500">
                  Cafe will serve the most pleasant prices
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <section className="w-100% h-150 flex align-center justify-center gap-70 ">
          <div className="">
            <img
              src="../public/90d50edbda8d9552e1f9b120b815e98b534f30c3.png"
              alt=""
            />
          </div>
          <div className=" flex align-center justify-center flex-col">
            <h1 className="text-white text-5xl">
              We make <br /> <span className="text-[#35C66B]">delicious</span>
            </h1>
            <p className="text-white">
              Only in 2021 we have made more than 100,000 <br /> orders for you,
              your loved ones, all of you, and in <br />
              2022 we are ready to destroy the market
            </p>
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden">
              <img
                src="../public/Group 31 (3).png"
                alt="Cooking process"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-full transition">
                  {/* Play icon */}
                  <span className="flex items-center justify-center w-6 h-6 bg-white text-green-500 rounded-full text-xs">
                    ▶
                  </span>
                  <span className="text-sm font-medium">Cooking Process</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <section className="">
          <div className="flex  gap-20">
            <h1 className="text-white text-5xl">
              New Our <br />
              <span className="text-[#35C66B]">Products</span>
            </h1>
            <p className="text-white">
              Have time to buy the most harmonious drinks <br /> in the new
              Starbucks coffee and don't forget <br /> about the discount!
              Starbucks coffee and <br />
              don't forget about the discount!
            </p>
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <section className="bg-[#0b1d1c] py-12 px-6">
          <div className="container">
            {/* Header */}
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-white">
                Our New <span className="text-[#35C66B]"> Events</span>
              </h1>
              <p className="text-gray-400 mt-2 max-w-md">
                Only in 2021 we have made more than 100,000 <br /> orders for
                you, your loved ones, all of you, and in <br /> 2022 we are
                ready to destroy the market
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="relative h-64 rounded-xl overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src="../public/6a283a8e1dfaa3ea4a72dd3085916cd784d38051.jpg"
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 h-full flex flex-col justify-between p-5">
                  <h1 className="text-lg font-semibold text-white"></h1>
                  <button className="bg-green-500 text-black px-5 py-2 rounded-full w-fit">
                    More
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative h-64 rounded-xl overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src="../public/d0c6e8c4ca6536e86b9c67bb1b1de17fdf9ef1ca.jpg"
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 h-full flex flex-col justify-between p-5">
                  <h1 className="text-lg font-semibold text-white"></h1>
                  <button className="bg-green-500 text-black px-5 py-2 rounded-full w-fit">
                    More
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative h-64 rounded-xl overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src="../public/459aea58383a8a86ae93dd531a57410d765e6980.jpg"
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 h-full flex flex-col justify-between p-5">
                  <h1 className="text-lg font-semibold text-white"></h1>
                  <button className="bg-green-500 text-black px-5 py-2 rounded-full w-fit">
                    More
                  </button>
                </div>
              </div>

              {/* Card 4 */}
              <div className="relative h-64 rounded-xl overflow-hidden">
                <img
                  className="absolute inset-0 w-full h-full object-cover"
                  src="../public/759cd17ede5669cf516d38b286853e19eafb8443.jpg"
                />
                <div className="absolute inset-0 bg-black/50" />

                <div className="relative z-10 h-full flex flex-col justify-between p-5">
                  <h1 className="text-lg font-semibold text-white"></h1>
                  <button className="bg-green-500 text-black px-5 py-2 rounded-full w-fit">
                    More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <div className="w-full h-100 flex align-center justify-between">
          <div className="flex align-center justify-center flex-col">
            <h1 className="text-white text-6xl">
              Our <br />
              <span className="text-[#35C66B]">Contacts</span>
            </h1>
            <br />
            <br />
            <p className="text-white">
              Have time to buy the most harmonious <br /> drinks in the new
              Starbucks coffee and <br /> don't forget about the discount!
            </p>
            <br />
            <br />

            <h3 className="text-3xl text-white">📞@supercoffee</h3>
            <h3 className="text-3xl text-white">📞+7-999-999-99-99</h3>
          </div>
          <div className="">
            <img className="w-120 h-130"  src="../public/Group 51.png" alt="" />
          </div>
        </div>
      </div>
<br /><br /><br /><br /><br /><br /><br /><br />
      <nav className="bg-black w-full text-white px-6 py-4">
      <div className="container">
        {/* Left */}
        <div className="flex gap-14">
          {/* Logo */}
          <h1 className="text-green-500 font-semibold text-lg">
            StarBucks
          </h1>

          {/* Menu */}
          <ul className="hidden md:flex gap-12 text-sm">
            {/* Item 1 */}
            <li className="space-y-1">
              <p className="text-white font-medium">Main Page</p>
              <span className="block text-gray-400 text-xs">
                Buy
              </span>
              <span className="block text-gray-400 text-xs">
                More
              </span>
            </li>

            {/* Item 2 */}
            <li className="space-y-1">
              <p className="text-white font-medium">We Make</p>
              <span className="block text-gray-400 text-xs">
                Process
              </span>
            </li>

            {/* Item 3 */}
            <li className="space-y-1">
              <p className="text-white font-medium">Products</p>
              <span className="block text-gray-400 text-xs">
                Cappuccino
              </span>
              <span className="block text-gray-400 text-xs">
                Fast
              </span>
              <span className="block text-gray-400 text-xs">
                Fast
              </span>
            </li>

            {/* Item 4 */}
            <li className="space-y-1">
              <p className="text-white font-medium">Events</p>
              <span className="block text-gray-400 text-xs">
                Drinks
              </span>
              <span className="block text-gray-400 text-xs">
                Eat
              </span>
            </li>

            {/* Item 5 */}
            <li className="space-y-1">
              <p className="text-white font-medium">Contacts</p>
              <span className="block text-gray-400 text-xs">
                Instagram
              </span>
              <span className="block text-gray-400 text-xs">
                Number
              </span>
            </li>
          </ul>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">
          <p className="text-green-500 text-sm">
            +7 999 999 99 99
          </p>

          <div className="w-9 h-9 border border-green-500 rounded-full flex items-center justify-center text-green-500 cursor-pointer">
            IG
          </div>

          <div className="w-9 h-9 border border-green-500 rounded-full flex items-center justify-center text-green-500 cursor-pointer">
            ☰
          </div>
        </div>
      </div>
    </nav>
      
    </>
  );
}

export default App;
