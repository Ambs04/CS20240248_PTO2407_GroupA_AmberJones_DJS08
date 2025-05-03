import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
//import { Link } from "react-router-dom";
//import "../../server";

export default function VanDetail() {
  //set params
  const params = useParams();

  //set state
  const [van, setVan] = React.useState(null);

  const location = useLocation();

  //fetch data from 'api' and map data to the setVan array
  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
    //fetch data each time the path id changes
  }, [params.id]);

  const search = location.useState?.search || "";
  const type = location.useState?.type || "all";

  //Use ternary to see if van exists, if it does, display van  detail tile. If it doesn't exist then render the h2 text

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type}</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p>${van.price} / day</p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
