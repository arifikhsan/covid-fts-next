import "regenerator-runtime/runtime";
import { createMocks } from "node-mocks-http";
import daily from "../../pages/api/daily";

describe("/api/daily", () => {
  it("should return a list of cases", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    await daily(req, res);

    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res._getData())).toBeTruthy()
  });
});
