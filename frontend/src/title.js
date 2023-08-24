import React from "react";

const Title = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("grid");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <h1
        onClick={handleClickScroll}
        id="Title"
        className="px-5 py-5 text-gray-800 cursor-pointer hover:text-[#AAC4FF] animate-bounce text-6xl font-bold leading-tight select-none"
      >
        Word Search
      </h1>
    </div>
  );
};

export default Title;
