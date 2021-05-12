import "regenerator-runtime/runtime";
import { createMocks } from "node-mocks-http";
import hello from "../../pages/api/hello";

describe("/api/hello", () => {
  it("should return a John Doe name", async () => {
    const { req, res } = createMocks({
      method: "GET",
    });

    await hello(req, res);

    expect(res.statusCode).toBe(200);
    expect(JSON.parse(res._getData())).toEqual(
      expect.objectContaining({ name: "John Doe" })
    );
  });
});
