const productsRoutes = require("./products");
const basketRoutes = require("./basket");

const appRouter = (app, fs) => {
  // Default Route.
  app.get("/", (req, res) => {
    res.send("Welcome to the Golden Shoe API");
  });

  // Running women route module.
  productsRoutes(app, fs);
  basketRoutes(app, fs);
};

module.exports = appRouter;
