const { getCharById } = require("../controllers/getCharById");
const { postFav, deleteFav } = require("../controllers/handleFavorites");
const { login } = require("../controllers/login.js");
const router = require("express").Router();

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});

router.get("/login", (req, res) => {
  login(req, res);
});

// es igual a lo de arriba, ejecuta la funcion
// y le pasa la req y la res automaticamente
router.post("/fav", postFav);

router.delete("/fav/:id", deleteFav);

module.exports = router;
