import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      //성공시
      const response = await axios.get(
        //
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      );
      setData(response.data.data.movies);
      console.log(response.data.data.movies);
    } catch (error) {
      //실패시
      console.log("error");
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {data.map((movies) => (
          <div>
            <div>{movies.title}</div>
            <img src={movies.background_image_original} />
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
