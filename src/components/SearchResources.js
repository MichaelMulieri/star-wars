import { useState } from "react";
import { useNavigate } from "react-router";
import "./SearchResources.css";

const SearchResources = () => {
  const [resource, setResource] = useState("people");
  const [id, setId] = useState("");
  const [idIsValid, setIdIsValid] = useState(true);
  const navigate = useNavigate();

  const search = () => {
    navigate(`/${resource}/${id}`);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (id.length === 0) {
      setIdIsValid(false);
      return;
    } else setIdIsValid(true);
    search();
    console.log(resource, id);
  };

  return (
    <>
      <div className="searchInput">
        <form onSubmit={handleSubmit}>
          <label>
            Search for:
            <select
              onChange={(event) => setResource(event.target.value)}
              className="resourceSelector"
              value={resource}
            >
              <option value="people">People</option>
              <option value="planets">Planets</option>
              <option value="starships">Starships</option>
            </select>
          </label>
          <label>
            ID:
            <input
              onChange={(event) => setId(event.target.value)}
              className="idInput"
              type="number"
              value={id}
            ></input>
          </label>
          <button>Search</button>
        </form>
        {!idIsValid ? (
          <p className="idErrorMessage">Please enter an id</p>
        ) : null}
      </div>
    </>
  );
};

export default SearchResources;
