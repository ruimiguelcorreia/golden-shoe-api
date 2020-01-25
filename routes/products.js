const productsRoutes = (app, fs) => {
  const dataPath = "./data/products.json";

  // Read:
  app.get("/products", (req, res) => {
    const filterFor = req.query.for;

    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      const products = JSON.parse(data);
      res.send(products.products.filter(product => product.for === filterFor));
    });
  });
};

module.exports = productsRoutes;
