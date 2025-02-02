const Faq = require("../models/faqModel");
const axios = require("axios");


const GOOGLE_TRANSLATE_API_KEY = process.env.GOOGLE_TRANSLATE_API_KEY;

const translateText = async (text, targetLang) => {
    try {
        const response = await axios.get(
            `https://translation.googleapis.com/language/translate/v2`,
            {
                params: { q: text, target: targetLang, key: GOOGLE_TRANSLATE_API_KEY },
            }
        );
        return response.data.data.translations[0].translatedText;
    } catch (error) {
        console.error("Translation Error:", error);
        return text; // Fallback to original text
    }
};

// Fetch All FAQs (Supports Language Translation)
const getFaqs = async (req, res) => {
    try {
        const lang = req.query.lang || "en";

        const faqs = await Faq.find();
        const translatedFaqs = await Promise.all(
            faqs.map(async (faq) => ({
                question: await translateText(faq.question, lang), // ✅ Translates question
                answer: await translateText(faq.answer, lang), // ✅ Now also translates answer
            }))
        );

        res.status(200).json(translatedFaqs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createFaq = async (req, res) => {
    try {
        console.log("Request Body:", req.body); 
        if (Array.isArray(req.body)) {
            const faqs = req.body.map((faq) => {
                if (!faq.question || !faq.answer) {
                    throw new Error("Both question and answer are required!");
                }
                return { question: faq.question, answer: faq.answer };
            });

            const createdFaqs = await Faq.insertMany(faqs);
            return res.status(201).json(createdFaqs);
        }

        // Process a single FAQ
        const { question, answer } = req.body;
        if (!question || !answer) {
            return res.status(400).json({ message: "Both question and answer are required!" });
        }

        const faq = await Faq.create({ question, answer });
        res.status(201).json(faq);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
const deleteFaq = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedFaq = await Faq.findByIdAndDelete(id);
      if (!deletedFaq) {
        return res.status(404).json({ message: "FAQ not found" });
      }
      res.status(200).json({ message: "FAQ deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  

module.exports = { getFaqs, createFaq, deleteFaq };
