const request = require("supertest");
const app = require("../src/app");

describe("GET /api/faqs", () => {
    it("should return FAQs", async () => {
        const res = await request(app).get("/api/faqs");
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});
