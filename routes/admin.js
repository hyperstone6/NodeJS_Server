const path = require("path");
const express = require("express");
const router = express.Router();
const rootDir = require("../utils/path");

//When in /add-product page it provides a form to enable users to
//input a text and submit it, then makes a post request to the /product
//page
const products = [];
router.get("/add-products", (req, res) => {
  //   res.sendFile(path.join(rootDir, "views", "add-products.html"));
  //   ^^^ No need for this since we're using a templating engine now
  res.render("add-products"); // <== rendering the .pug file
  //   res.send(
  //     `<form action='/admin/add-products' method='POST'>
  //           <input type='text' name='title'>
  //               <button type='submit'>
  //                   Add product
  //               </button>
  //           </input>
  //       </form>`
  //   );
});

// app.use("/product", (req, res) => {
//     console.log(req.body);
//     res.redirect("/");
//   });

//The app.use above triggers even for get requests despite our form
//mentioning post request. To solve this, we can use the filtered
//versions of app.use.
//app.get() is the same as app.use() but runs only during get requests
//The difference from use() is that get(), post() etc. use exact paths.
//app.post() runs only during post requests. So:

router.post("/add-products", (req, res) => {
  // ^^^^ Triggers only upon post requests
  products.push({title: req.body.title});
  res.redirect("/"); //<== after console logging the body, redirects to "/"
});

//The other options are: app.delete(), app.put(), app.patch()

module.exports.routes = router;
module.exports.products = products;
