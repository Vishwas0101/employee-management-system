import React from "react";

const Header = () => {
  return (
    <>
      <div className="flex items-end justify-between">
        <h1 className="text-2x font-medium">
          Hello <br />
          <span className="text-3xl font-semibold">Vishwas👋</span>{" "}
        </h1>
        <button className="bg-red-600 px-5 py-2 text-white font-medium border border-white-50 rounded-lg">Log out</button>
      </div>
    </>
  );
};
export default Header;