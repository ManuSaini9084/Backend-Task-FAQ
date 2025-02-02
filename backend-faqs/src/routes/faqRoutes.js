const express = require("express");
const { getFaqs, createFaq , deleteFaq} = require("../controllers/faqController");

const router = express.Router();

router.get("/", getFaqs);
router.post("/", createFaq);
router.delete("/:id", deleteFaq);


module.exports = router;
