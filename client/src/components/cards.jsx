import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../constants";

export default function Card() {
  const [travels, setTravels] = useState([]);
  const navigate = useNavigate();

  const getTravels = async () => {
    try {
      const {
        data: { travels },
      } = await axios.get(`${BASE_URL}`);
      setTravels(travels);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTravel = async id => {
    try {
      await axios.delete(`${BASE_URL}/${id}`);
      getTravels();
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTravels();
  }, []);

  return (
    <>
      {travels.map(travel => (
        <div className="card my-3" key={travel._id}>
          <img src={travel.image} className="card-img-top" alt={travel.title} />
          <div className="card-body">
            <h5 className="card-title">{travel.title}</h5>
            <p className="card-text">{travel.descr}</p>
          </div>
          <div className="d-flex btn-group p-3">
            <button
              className="btn btn-outline-primary"
              onClick={() => {
                navigate(`/update/${travel._id}`);
              }}
            >
              Edit
            </button>
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteTravel(travel._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
