import { Navbar } from "../components";
import { Routes, Route } from "react-router-dom";
import { Home, CreateCard, UpdateCard } from "../pages";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCard />} />
        <Route path="/update/:id" element={<UpdateCard />} />
      </Routes>
    </>
  );
}
