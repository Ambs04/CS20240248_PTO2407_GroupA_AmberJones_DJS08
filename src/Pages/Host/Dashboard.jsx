import { Link } from "react-router-dom";
import React from "react";
import "../../server";

export default function Dashboard() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  function vanElRender(vans) {
    const vanEl = vans.map((van) => (
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} />
        <div className="host-van-info">
          <h3>{van.name}</h3>
          <p>${van.price} / day</p>
        </div>
        <Link to={`vans/${van.id}`}>View</Link>
      </div>
    ));
    return (
      <div className="host-vans-list">
        <section>{vanEl}</section>
      </div>
    );
  }

  return (
    <>
      <section className="host-dashboard-earnings">
        <div className="info">
          <h1>Welcome!</h1>
          <p>Income last 30 days</p>
          <h2>$2,260</h2>
        </div>
        <Link to="income">Details</Link>
      </section>
      <section className="host-dashboard-reviews">
        <h2></h2>
        <p>5.0 / 5</p>
        <Link to="reviews">Details</Link>
      </section>
      <section className="host-dashboard-vans">
        <div className="top">
          <h2>Your listed vans</h2>
          <Link to="vans">View all</Link>
        </div>
        {vanElRender(vans)}
      </section>
    </>
  );
}
