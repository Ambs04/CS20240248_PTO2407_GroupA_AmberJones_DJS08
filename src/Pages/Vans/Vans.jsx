import React from "react";
import "../../server";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  //set search params
  const [searchParams, setSearchParams] = useSearchParams();

  //set state(empty array) to a variable
  const [vans, setVans] = React.useState([]);

  const filterType = searchParams.get("type");

  const displayVans = filterType
    ? vans.filter((van) => van.type === filterType)
    : vans;

  //fetch data from server.js 'api' and load api data once
  React.useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  //map over api data and log a custom card for each van in the react dom
  const vanEl = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={`/vans/${van.id}`}
        state={{
          search: `?${searchParams.toString()}`,
          type: filterType,
        }}
      >
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
      <div>
        <h1>Explore our van options</h1>
        <div className="van-list-filter-buttons">
          <button
            className={`van-type simple ${
              filterType === "simple" ? "selected" : ""
            }`}
          >
            Simple
          </button>
          <button
            className={`van-type luxury ${
              filterType === "luxury" ? "selected" : ""
            }`}
          >
            Luxury
          </button>
          <button
            className={`van-type rugged ${
              filterType === "rugged" ? "selected" : ""
            }`}
          >
            Rugged
          </button>
        </div>
      </div>

      <div className="van-list">{vanEl}</div>
    </div>
  );
}
