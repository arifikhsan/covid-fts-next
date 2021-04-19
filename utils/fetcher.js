import { get } from "axios";

const dailyCase = async (rootData) => {
  const { data } = await get(
    "https://data.covid19.go.id/public/api/update.json"
  );
  return data.update;
};

export default dailyCase
