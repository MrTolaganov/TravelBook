const Travel = require("../models/travel.model");

const getTravels = async (req, res) => {
  try {
    const travels = await Travel.find();
    res.status(200).json({ message: "Travels got", travels });
  } catch (err) {
    res.send(err);
  }
};

const getTravel = async (req, res) => {
  try {
    const travel = await Travel.findById(req.params.id);
    if (!travel) return res.status(404).json({ message: "Not found" });
    res.status(200).json({ message: "Travel got", travel });
  } catch (err) {
    res.send(err);
  }
};

const postTravel = async (req, res) => {
  try {
    const createdTravel = await Travel.create(req.body);
    res.status(201).json({ message: "Travel posted", createdTravel });
  } catch (err) {
    res.send(err);
  }
};

const updateTravel = async (req, res) => {
  try {
    const updatedTravel = await Travel.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.status(200).json({ message: "Travel updated", updatedTravel });
  } catch (err) {
    res.send(err);
  }
};

const deleteTravel = async (req, res) => {
  try {
    await Travel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Travel deleted" });
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  getTravels,
  getTravel,
  postTravel,
  updateTravel,
  deleteTravel,
};
