import React from "react";
import { motion } from "framer-motion";

const FaqCard = ({ faq, onDelete }) => {
  const { question, answer, _id } = faq;

  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 space-y-4 transform hover:scale-105 transition-all"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2 className="text-xl font-semibold text-blue-600">{question}</h2>
      <p className="text-gray-800">{answer}</p>
      <button
        onClick={() => onDelete(_id)}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition-all"
      >
        Delete
      </button>
    </motion.div>
  );
};

export default FaqCard;
