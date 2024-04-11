const { Router } = require("express");
const {
  getTravels,
  getTravel,
  postTravel,
  updateTravel,
  deleteTravel,
} = require("../controllers/travel.controller");

const router = Router();

router.get("/", getTravels);
router.get("/:id", getTravel);
router.post("/post", postTravel);
router.put("/:id", updateTravel);
router.delete("/:id", deleteTravel);

module.exports = router;
