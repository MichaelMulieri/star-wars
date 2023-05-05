import { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";

const StarshipsComponent = () => {
  const [data, setData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/${id}/?format=json`)
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
        Model: {data.model}
        <br />
        Manufacturer: {data.manufacturer}
        <br />
        Cost in credits: {data.cost_in_credits}
        <br />
        Class: {data.starship_class}
      </p>
    </div>
  );
};

export default StarshipsComponent;
