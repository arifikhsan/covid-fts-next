import "regenerator-runtime/runtime";
import axios from "axios";
import fetcher from "../../utils/fetcher";

describe("fetcher util", () => {
  it("should return a correct url", async () => {
    const urlCovid = "https://data.covid19.go.id/public/api/update.json";

    const expected = await axios.get(urlCovid);
    const actual = await fetcher(urlCovid);

    expect(expected.config.url).toEqual(actual.config.url);
  });

  it("should fail when url is incorrect", async () => {
    const badUrl = "%%%%%";

    try {
      await fetcher(badUrl);
    } catch (e) {
      expect(e).toEqual(new Error("Something went wrong"));
    }
  });
});
