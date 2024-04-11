import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className=" container container-fluid d-flex justify-content-between">
        <Link to={"/"} className="navbar-brand text-white">
          Travel Book
        </Link>
        <button
          className="btn btn-primary"
          onClick={() => {
            navigate("/create");
          }}
        >
          Create
        </button>
      </div>
    </nav>
  );
}
