import "regenerator-runtime/runtime";
import { createMocks } from "node-mocks-http";
import daily from "../../pages/api/daily";

describe("/api/daily", () => {
  it("should return a list of cases", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    await daily(req, res);

    const cases = JSON.parse(res._getData())
    expect(res.statusCode).toBe(200);
    expect(cases).toBeTruthy()
    expect(cases.length).toBeGreaterThan(300)
  });
});
