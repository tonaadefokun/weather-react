import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props) {
  return (
    <div className="container">
      <ul className="navigation-items">
        <li className="navigation-item">Lisbon</li>
        <li className="navigation-item">Paris</li>
        <li className="navigation-item">Sydney</li>
        <li className="navigation-item">Lagos</li>
      </ul>
      <div>
        <form>
          <input type="text" placeholder="Enter a city" />
          <input type="submit" value="Search" />
        </form>
        <button className="btn btn-primary">Current</button>
      </div>
      <div>
        <div>
          <h1>Lisbon</h1>
          <div>Thursday 21:23</div>
          <div>Clouds</div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div>21°C</div>
        </div>
        <div className="col">
          <div>Precipitation: 78%</div>
          <div>Wind: 2km/h</div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-2">
          <div>Mon</div>
          <div>
            <canvas width="38" height="38" />
          </div>
          <div>24°C</div>
        </div>
        <div className="col-sm-2">
          <div>Tue</div>
          <div>
            <canvas width="38" height="38" />
          </div>
          <div>24°C</div>
        </div>
        <div className="col-sm-2">
          <div>Wed</div>
          <div>
            <canvas width="38" height="38" />
          </div>
          <div>24°C</div>
        </div>
        <div className="col-sm-2">
          <div>Thu</div>
          <div>
            <canvas width="38" height="38" />
          </div>
          <div>24°C</div>
        </div>
        <div className="col-sm-2">
          <div>Fri</div>
          <div>
            <canvas width="38" height="38" />
          </div>
          <div>24°C</div>
        </div>
      </div>
      <small>
        <a href="#" target="_blank">
          Open weather app
        </a>{" "}
        from{" "}
        <a href="#" target="_blank">
          Adefokun Adetona G
        </a>
      </small>
    </div>
  );
}
