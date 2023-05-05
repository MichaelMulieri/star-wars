import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const PlanetComponent = (props) => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/planets/${id}/?format=json`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setData({ error: "These are not the droids you are looking for" });
      });
  }, [id]);

  return (
    <>
      {data.error ? (
        <h1>{data.error}</h1>
      ) : (
        <>
          <h1>Planet: {data.name}</h1>
          <p>
            Terrain: {data.terrain} <br /> Climate: {data.climate} <br />
            Surface water: <br />
            {data.surface_water} <br /> Population: {data.population}
          </p>
        </>
      )}
    </>
  );
};

export default PlanetComponent;
