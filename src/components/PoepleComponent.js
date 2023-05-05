import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const PeopleComponent = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}/?format=json`)
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
        setData({ error: "These are not the droids you are looking for" });
      });
  }, [id]);

  return data.error ? (
    <h1>{data.error}</h1>
  ) : (
    <div>
      <h1>Planet: {data.name}</h1>
      <p>
        Height: {data.height}
        <br />
        Mass: {data.mass}
        <br />
        Skin color: {data.skin_color}
        <br />
        Hair Color: {data.hair_color}
      </p>
    </div>
  );
};

export default PeopleComponent;
