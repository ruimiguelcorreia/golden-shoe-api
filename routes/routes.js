const productsRoutes = require("./products");

const appRouter = (app, fs) => {
  // Default Route.
  app.get("/", (req, res) => {
    res.send("Welcome to the Golden Shoe API");
  });

  // Running women route module.
  productsRoutes(app, fs);
};

module.exports = appRouter;
