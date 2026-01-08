const request = require("supertest");
const app = require("../../src/server");

describe("GET /hello", () => {
  it("should return Hello world", async () => {
    const res = await request(app).get("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world!");
  });

  it("should return personalized greeting with name parameter", async () => {
    const res = await request(app).get("/hello/Alice");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world! From Alice");
  });

  it("should return default greeting when name is empty", async () => {
    const res = await request(app).get("/hello/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world!");
  });
});

describe("POST /hello", () => {
  it("should return personalized greeting with x-name header", async () => {
    const res = await request(app)
      .post("/hello")
      .set("x-name", "Bob");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world! From Bob");
  });

  it("should return default greeting without x-name header", async () => {
    const res = await request(app).post("/hello");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Hello world!");
  });
});
