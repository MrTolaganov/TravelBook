import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../constants";

export default function CreateCard() {
  const [{ title, descr, image }, setTravel] = useState({
    title: "",
    descr: "",
    image: "",
  });
  const navigate = useNavigate();

  const changeHandler = e => {
    const { name, value } = e.target;
    setTravel(prev => ({ ...prev, [name]: value }));
  };

  const createHandler = async (e) => {
    e.preventDefault()
    try {
      await axios.post(`${BASE_URL}/post`, { title, descr, image });
      navigate("/");
    } catch (err) {
      console.error();
    }
  };

  return (
    <form className="container my-5" onSubmit={createHandler}>
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
        Create
      </button>
    </form>
  );
}
