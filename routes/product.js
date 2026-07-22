const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { productSchema} = require("../schema.js");
const Product = require("../models/product.js"); 
const { isLoggedIn} = require("../middleware.js");
const productController = require("../controllers/products.js");

const multer = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({ storage })

const validateListing = (req, res, next) => {
let { error } = productSchema.validate(req.body);
       if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
         throw new ExpressError(400, errMsg);
       }  else  {
        next();
       }
    };


    router
    .route("/")
    .get(wrapAsync(productController.index))
   .post(
  isLoggedIn,
  upload.single('product[image]'),
   validateListing,
  wrapAsync(productController.createProduct),
);



//New Route
router.get("/new", isLoggedIn, productController.renderNewForm);


router
.route("/:id")
.get(wrapAsync(productController.showProduct))
.put(
  isLoggedIn,
  upload.single("product[image]"),
  validateListing,
  wrapAsync(productController.updateProduct),
)
.delete(
  isLoggedIn,
  wrapAsync(productController.destroyListing),
);
  

//Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  wrapAsync(productController.renderEditForm),
);


module.exports = router;
