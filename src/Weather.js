import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  function displayForecast(response) {
    alert(`The weather in ${response.data.name} is ${response.data.main.temp}`);
  }
  let apiKey = "5d28e41830862bc850144acfa82e7516";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(displayForecast);

  return (
    <div>
      <Loader
        type="Puff"
        color="orange"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />{" "}
    </div>
  );
}
