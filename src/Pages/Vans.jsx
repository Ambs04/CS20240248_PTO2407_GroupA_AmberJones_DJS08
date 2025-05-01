import React from "react";
import "../server";

export default function Vans() {
  //set state(empty array) to a variable
  const [vans, setVans] = React.useState([]);

  //fetch data from server.js 'api' and load api data once
  React.useEffect(() => {
    fetch("../server/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  //map over api data and log a custom card for each van in the react dom
  const vanEl = vans.map((van) => (
    <div key={van.id} className="van-tile">
      <img src={van.imageUrl} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>`$ ${van.price}/day`</p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  ));

  return <h1>Vans go here</h1>;
}
