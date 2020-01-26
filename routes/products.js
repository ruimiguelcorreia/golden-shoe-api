const productsRoutes = (app, fs) => {
  const dataPath = "./data/products.json";

  // Get all the products:
  app.get("/products", (req, res) => {
    const filterFor = req.query.for;
    const filterType = req.query.type;
    const filterColor = req.query.color;
    const filterSort = req.query.price;

    const ascending = (a, b) => {
      const priceA = a.price;
      const priceB = b.price;

      if (priceA > priceB) {
        return 1;
      } else if (priceB > priceA) {
        return -1;
      } else {
        return 0;
      }
    };

    const descending = (a, b) => {
      const priceA = a.price;
      const priceB = b.price;

      if (priceB > priceA) {
        return 1;
      } else if (priceA > priceB) {
        return -1;
      } else {
        return 0;
      }
    };

    fs.readFile(dataPath, "utf8", (err, data) => {
      if (err) {
        throw err;
      }

      const products = JSON.parse(data);

      const result = products.products
        .filter(product => (filterFor ? product.for === filterFor : true))
        .filter(product => (filterType ? product.type === filterType : true))
        .filter(product => (filterColor ? product.color === filterColor : true))
        .sort((a, b) =>
          filterSort === "ascending" ? ascending(a, b) : descending(a, b)
        );
      res.send(result);
    });
  });
};

module.exports = productsRoutes;
