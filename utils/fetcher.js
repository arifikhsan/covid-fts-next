import { get } from "axios";

const updateData = async (rootData) => {
  const { data } = await get(
    "https://data.covid19.go.id/public/api/update.json"
  );

  let returnData;
  if (rootData == false) {
    returnData = data.update;
  } else {
    returnData = data;
  }
  return returnData;
};

export default updateData
