import React, { useState } from "react";
import axios from "axios";

const FaqForm = ({ onFaqAdded }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question || !answer) {
      setError("Both question and answer are required!");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await axios.post("http://localhost:8000/api/faqs", {
        question,
        answer,
      });

      onFaqAdded(res.data); // Add the newly created FAQ to the list
      setQuestion(""); // Reset the form fields
      setAnswer("");
    } catch (err) {
      setError("An error occurred while adding the FAQ.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-blue-600 mb-4">Add New FAQ</h2>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="question" className="block text-gray-700">Question</label>
          <input
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter the question"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="answer" className="block text-gray-700">Answer</label>
          <textarea
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter the answer"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className={`w-full p-2 rounded-md bg-blue-600 text-white ${loading && "opacity-50 cursor-not-allowed"}`}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add FAQ"}
        </button>
      </form>
    </div>
  );
};

export default FaqForm;
