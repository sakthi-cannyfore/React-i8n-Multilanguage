import React from "react";

const Header = ({ language, setLanguage }) => {
  return (
    <div className="">
      <header className="flex justify-between items-center mx-10 border p-5 rounded-3xl  bg-blue-200 overflow-hidden border-none">
        <div>
          <h1>logo</h1>
        </div>
        <ul className="hidden md:flex mx-10 ">
          <li className="mx-2.5">About</li>
          <li className="mx-2.5">Services</li>
          <li className="mx-2.5">Contact</li>
          <select
            className="w-[30%] border-white outline rounded-[50px] bg-blue-200 "
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="ta">Tamil</option>
            <option value="kn">Kannada</option>
            <option value="ml">Malayalam</option>
          </select>
        </ul>
        <select
          className="block md:hidden w-[30%] border-white outline rounded-[50px] bg-blue-200 "
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="ta">Tamil</option>
          <option value="kn">Kannada</option>
          <option value="ml">Malayalam</option>
        </select>{" "}
      </header>
    </div>
  );
};

export default Header;
