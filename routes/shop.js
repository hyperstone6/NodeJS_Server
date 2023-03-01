const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../utils/path");
const adminData = require("./admin");

router.get("/", (req, res) => {
  //   res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render("shop", {
    docTitle: "shoppe",
    prods: adminData.products,
  });
});

module.exports = router;
