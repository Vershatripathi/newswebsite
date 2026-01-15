import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([]);
  const API_KEY = "1ef1872a489b4b618291f4a960b04f9e";

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    setNewsData(jsonData.articles);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const userInput = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      
      {/* Navbar */}
      <nav className="bg-blue-600 text-white px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4 shadow-md">
        <h1 className="text-2xl font-bold text-center md:text-left">
          📰 Trendy News
        </h1>

        <ul className="flex justify-center gap-6 font-medium">
          <a className="hover:text-blue-200 cursor-pointer">All News</a>
          <a className="hover:text-blue-200 cursor-pointer">Trending</a>
        </ul>

        <div className="flex gap-2 justify-center">
          <input
            type="text"
            placeholder="Search news..."
            value={search}
            onChange={handleInput}
            className="rounded-md px-3 py-1 text-slate-700 bg-white w-48 sm:w-64 focus:outline-none"
          />
          <button
            onClick={getData}
            className="bg-blue-800 hover:bg-blue-900 transition px-4 py-1 rounded-md font-semibold"
          >
            Search
          </button>
        </div>
      </nav>

      {/* Heading */}
      <div className="my-6 px-4">
        <p className="text-center text-xl sm:text-2xl font-bold text-gray-800">
          Stay Updated with TrendyNews 🚀
        </p>
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-3 px-4">
        {["sports", "politics", "entertainment", "health", "fitness"].map(
          (item) => (
            <button
              key={item}
              value={item}
              onClick={userInput}
              className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-full font-semibold text-sm sm:text-base"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          )
        )}
      </div>

      {/* Cards */}
      <div className="px-4 pb-10">
        <Card data={newsData} />
      </div>
    </div>
  );
};

export default Newsapp;
