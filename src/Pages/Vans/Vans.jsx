import React from "react";
import "../../server";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  //set search params
  const [searchParams, setSearchParams] = useSearchParams();

  //set state(empty array) to a variable
  const [vans, setVans] = React.useState([]);

  const filterType = searchParams.get("type");

  //fetch data from server.js 'api' and load api data once
  React.useEffect(() => {
    fetch("api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayVans = filterType
    ? vans.filter((van) => van.type === filterType)
    : vans;

  //map over api data and log a custom card for each van in the react dom
  const vanEl = displayVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
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

  function handleFilters(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }

      return prevParams;
    });
  }

  return (
    <div className="van-list-container">
      <div>
        <h1>Explore our van options</h1>
        <div className="van-list-filter-buttons">
          <button
            onClick={() => handleFilters("type", "simple")}
            className={`van-type simple ${
              filterType === "simple" ? "selected" : ""
            }`}
          >
            Simple
          </button>
          <button
            onClick={() => handleFilters("type", "luxury")}
            className={`van-type luxury ${
              filterType === "luxury" ? "selected" : ""
            }`}
          >
            Luxury
          </button>
          <button
            onClick={() => handleFilters("type", "rugged")}
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
