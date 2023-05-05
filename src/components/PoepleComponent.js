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
        setData({
          error: (
            <img
              alt="obi-wan kenobi"
              src={require("../pictures/obiwan.webp")}
            />
          ),
        });
      });
  }, [id]);

  return data.error ? (
    <h1>{data.error}</h1>
  ) : (
    <div>
      <h1>Name: {data.name}</h1>
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
