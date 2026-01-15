import React from 'react'

const Card = ({ data }) => {

  const readMore = (url) => {
    window.open(url);
  };

  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((currItem, index) => {
        if (!currItem.urlToImage) return null;

        return (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <img
              src={currItem.urlToImage}
              alt="news"
              className="h-48 w-full object-cover"
            />

            <div className="p-4 flex flex-col gap-2">
              <h2
                onClick={() => readMore(currItem.url)}
                className="font-semibold text-gray-800 hover:text-blue-600 cursor-pointer overflow-hidden text-ellipsis"
              >
                {currItem.title}
              </h2>

              <p className="text-sm text-gray-600 overflow-hidden text-ellipsis">
                {currItem.description}
              </p>

              <button
                onClick={() => readMore(currItem.url)}
                className="mt-auto bg-blue-600 hover:bg-blue-700 transition text-white text-sm px-3 py-1 rounded-md w-fit"
              >
                Read More →
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
