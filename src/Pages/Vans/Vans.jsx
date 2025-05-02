import React from "react";
import "../../server";
import { Link } from "react-router-dom";

export default function Vans() {
  //set state(empty array) to a variable
  const [vans, setVans] = React.useState([]);

  //fetch data from server.js 'api' and load api data once
  React.useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  //map over api data and log a custom card for each van in the react dom
  const vanEl = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link to={`/vans/{van.id}`}>
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>${van.price} / day</p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanEl}</div>
    </div>
  );
}
