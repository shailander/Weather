import Weather from "./components/weather";
import Search from "./components/search";
import { useState } from "react";
import getWeatherData from "./service";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState("");

  const handleSearch = async (key) => {
    if (key === "Enter") {
      setQuery("");
      const response = await getWeatherData(query);
      if (response) {
        setData(response);
      }
    }
  };

  const checkTimeZone = () => {
    const hour =
      data !== ""
        ? new Date(data.dt * 1000 - data.timezone * 1000).getHours() + 5
        : 0;
    return hour > 18 ? "app" : "app day";
  };

  return (
    <div className={checkTimeZone()}>
      <main>
        <Search value={query} onSearch={handleSearch} onQuery={setQuery} />
        {data !== "" ? (
          <Weather data={data} />
        ) : (
          <div className="no-data">Enter the city name to see the weather</div>
        )}
      </main>
    </div>
  );
}

export default App;
