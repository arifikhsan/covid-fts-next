import axios from "axios";
import validURL from "./validUrl";

const fetcher = async (url) => {
  if (!validURL(url)) {
    throw new Error("Something went wrong");
  }
  return await axios.get(url);
};

export default fetcher;
