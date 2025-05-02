import React from "react";
import { useParams } from "react-router-dom";
//import "../../server";

export default function VanDetail() {
  //set params
  const params = useParams();

  //set state
  const [van, setVan] = React.useState();

  //fetch data from 'api' and map data to the setVan array
  React.useEffect(() => {
    fetch(`api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
    //fetch data each time the path id changes
  }, [params.id]);

  //Use ternary to see if van exists, if it does, display van  detail tile. If it doesn't exist then render the h2 text

  return (
    <div>
      {van ? (
        <div>
          <img src={van.imageUrl} />
          <i>{van.type}</i>
          <h2>{van.name}</h2>
          <p></p>
          <p>{van.description}</p>
          <button>Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
