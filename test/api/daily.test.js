import "regenerator-runtime/runtime";
import { createMocks } from "node-mocks-http";
import daily from "../../pages/api/daily";

describe("/api/daily", () => {
  let cases = [];
  let response = null;

  beforeAll(async () => {
    const { req, res } = createMocks({
      method: "GET",
    });
    await daily(req, res);
    cases = JSON.parse(res._getData());
    response = res;
  });

  it("should respond with success", () => {
    expect(response.statusCode).toBe(200);
  });

  it("should return a truthy value", () => {
    expect(cases).toBeTruthy();
  });

  it("should contain item of array which greater than 300", () => {
    expect(cases.length).toBeGreaterThan(300);
  });

  it("should return a list of object with correct property", () => {
    const length = cases.length;
    const randomIndex = Math.floor(Math.random() * (length + 1));
    const randomCase = cases[randomIndex];

    expect(randomCase).toHaveProperty("key");
    expect(randomCase).toHaveProperty("positive");
    expect(randomCase).toHaveProperty("active");
    expect(randomCase).toHaveProperty("recover");
    expect(randomCase).toHaveProperty("death");
    expect(randomCase).toHaveProperty("positive_cumulative");
    expect(randomCase).toHaveProperty("active_cumulative");
    expect(randomCase).toHaveProperty("recover_cumulative");
    expect(randomCase).toHaveProperty("death_cumulative");
    expect(randomCase).toHaveProperty("last_update");
    expect(randomCase).toHaveProperty("date_time");
  });

  it("should return a list of object with correct property value", () => {
    const length = cases.length;
    const randomIndex = Math.floor(Math.random() * (length + 1));
    const randomCase = cases[randomIndex];

    expect(typeof randomCase.key).toBe("number");
    expect(typeof randomCase.positive).toBe("number");
    expect(typeof randomCase.active).toBe("number");
    expect(typeof randomCase.recover).toBe("number");
    expect(typeof randomCase.death).toBe("number");
    expect(typeof randomCase.positive_cumulative).toBe("number");
    expect(typeof randomCase.active_cumulative).toBe("number");
    expect(typeof randomCase.recover_cumulative).toBe("number");
    expect(typeof randomCase.death_cumulative).toBe("number");
    expect(typeof randomCase.last_update).toBe("number");
    expect(typeof randomCase.date_time).toBe("string");
  });
});
