import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";

export default function UpdateCard() {
  const [{ title, descr, image }, setTravel] = useState({
    title: "",
    descr: "",
    image: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const changeHandler = e => {
    const { name, value } = e.target;
    setTravel(prev => ({ ...prev, [name]: value }));
  };

  const getTravel = async id => {
    try {
      const {
        data: {
          travel: { title, descr, image },
        },
      } = await axios.get(`${BASE_URL}/${id}`);
      setTravel(prev => ({ ...prev, title, descr, image }));
    } catch (err) {
      console.error(err);
    }
  };

  const updateHandler = async e => {
    e.preventDefault();
    try {
      await axios.put(`${BASE_URL}/${id}`, { title, descr, image });
      navigate("/");
    } catch (err) {
      console.error();
    }
  };

  useEffect(() => {
    getTravel(id);
  }, [id]);

  return (
    <form className="container my-5" onSubmit={updateHandler}>
      <div className="my-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          name="title"
          value={title}
          onChange={changeHandler}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="descr" className="form-label">
          Description
        </label>
        <input
          type="text"
          className="form-control"
          id="descr"
          name="descr"
          value={descr}
          onChange={changeHandler}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          Image URL
        </label>
        <input
          type="text"
          className="form-control"
          id="image"
          name="image"
          value={image}
          onChange={changeHandler}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Edit
      </button>
    </form>
  );
}
