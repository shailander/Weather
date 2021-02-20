import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5/weather";

const getWeatherData = async (place) => {
  let url = `?q=${place}&appid=${process.env.REACT_APP_KEY}`;
  return await axios
    .get(url)
    .then((response) => response.data)
    .catch(() => {
      toast.error("City not found!!", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    });
};

export default getWeatherData;
