import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import FaqCard from "./components/FaqCard";
import FaqForm from "./components/FaqForm";

const App = () => {
  const [faqs, setFaqs] = useState([]);
  const [selectedLang, setSelectedLang] = useState("en");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/faqs?lang=${selectedLang}`)
      .then((res) => setFaqs(res.data))
      .catch((err) => console.error(err));
  }, [selectedLang]);
  
  const handleLanguageChange = (e) => {
    setSelectedLang(e.target.value);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/api/faqs/${id}`)
      .then((res) => setFaqs(faqs.filter((faq) => faq._id !== id)))
      .catch((err) => console.error(err));
  };

  const handleFaqAdded = (newFaq) => {
    setFaqs((prevFaqs) => [...prevFaqs, newFaq]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header selectedLang={selectedLang} onLanguageChange={handleLanguageChange} />

      <div className="container mx-auto p-6">
        <FaqForm onFaqAdded={handleFaqAdded} />

        <h2 className="text-2xl font-bold text-center text-blue-600 mt-6 mb-4">FAQ's List</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.length ? (
            faqs.map((faq) => (
              <FaqCard key={faq._id} faq={faq} onDelete={handleDelete} />
            ))
          ) : (
            <p className="text-center text-gray-600">No FAQs available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
