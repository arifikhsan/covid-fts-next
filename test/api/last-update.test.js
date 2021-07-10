import "regenerator-runtime/runtime";
import { createMocks } from "node-mocks-http";
import lastUpdate from "../../pages/api/last-update";

describe("/api/last-update", () => {
  let total = {};
  let response = null;

  beforeAll(async () => {
    const { req, res } = createMocks({
      method: "GET",
    });
    await lastUpdate(req, res);
    total = JSON.parse(res._getData());
    response = res;
  });

  it("should respond with success", () => {
    expect(response.statusCode).toBe(200);
  });

  it("should return a truthy value", () => {
    expect(total).toBeTruthy();
  });

  it("should contain properties of object which equal to 5", () => {
    expect(Object.keys(total).length).toEqual(5);
  });

  it("should return an object with correct property", () => {
    expect(total).toHaveProperty("positive");
    expect(total).toHaveProperty("active");
    expect(total).toHaveProperty("cured");
    expect(total).toHaveProperty("death");
    expect(total).toHaveProperty("updated_at");
  });

  it("should return an object with correct property type", () => {
    expect(typeof total.positive).toBe("number");
    expect(typeof total.active).toBe("number");
    expect(typeof total.cured).toBe("number");
    expect(typeof total.death).toBe("number");
    expect(typeof total.updated_at).toBe("string");
  });
});
