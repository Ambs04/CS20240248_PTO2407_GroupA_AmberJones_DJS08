import React from "react";
import { useParams, Link, Outlet } from "react-router-dom";

export default function HostVanDetails() {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = React.useState();

  React.useEffect(() => {
    fetch(`api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, []);

  if (!currentVan) {
    return <h1>Loading...</h1>;
  }

  return (
    <section>
      <div>
        <div>
          <img src={currentVan.imageUrl} />
          <div>
            <i>{currentVan.type}</i>
            <h3>{currentVan.name}</h3>
            <h4>{currentVan.price} / day</h4>
          </div>
        </div>
        <Outlet />
      </div>
    </section>
  );
}
