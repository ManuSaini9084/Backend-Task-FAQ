import React from "react";



const Header = ({ selectedLang, onLanguageChange }) => {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">FAQ's</h1>

        <div>
          <select
            onChange={onLanguageChange}
            value={selectedLang}
            className="p-2 border border-white rounded bg-blue-500 focus:outline-none"
          >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="hi">Hindi</option>
          <option value="fr">French</option>
          {/* Add more languages as needed */}
        </select>
        </div>
      </div>
    </header>
  );
};
export default Header;
