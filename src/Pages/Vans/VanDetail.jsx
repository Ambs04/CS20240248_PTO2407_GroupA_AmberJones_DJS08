import { useParams } from "react-router-dom";

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
}
