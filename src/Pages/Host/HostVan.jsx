import React from "react";
import { Link } from "react-router-dom";

export default function HostVan() {
  const [vans, setVans] = React.useState();

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVanEl = vans.map((van) => (
    <Link to={`/host/vans/${van.id}`} key={van.id}>
      <div key={van.id}>
        <img src={van.imageUrl} />
        <div>
          <h3>{van.name}</h3>
          <p>${van.price} / day</p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1>Your listed vans</h1>
      <div>
        {vans.length > 0 ? <section>{hostVanEl}</section> : <h2>Loading...</h2>}
      </div>
    </section>
  );
}
