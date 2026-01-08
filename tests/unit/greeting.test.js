const { getGreeting } = require("../../src/greeting");

describe("getGreeting", () => {
  it("returns the hello world message", () => {
    expect(getGreeting()).toBe("Hello world!");
  });

  it("returns a personalized greeting when a name is provided", () => {
    expect(getGreeting("Alice")).toBe("Hello world! From Alice");
  });

  it("returns default greeting for empty string", () => {
    expect(getGreeting("")).toBe("Hello world!");
  });

  it("returns default greeting for null", () => {
    expect(getGreeting(null)).toBe("Hello world!");
  });

  it("returns default greeting for undefined", () => {
    expect(getGreeting(undefined)).toBe("Hello world!");
  });
});
