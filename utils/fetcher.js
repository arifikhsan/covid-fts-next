import axios from 'axios';

const dailyCase = async (rootData) => {
  const response = await axios.get(
    "https://data.covid19.go.id/public/api/update.json"
  );
  return response;
};

export default dailyCase
