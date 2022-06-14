let results;

exports.makeResult = async (req, res) => {
  results = req.body;
  console.log(req.protocol);
  console.log(req.get("host"));
  res.redirect("/teacher");
};

exports.getResult = (req, res) => {
  res.render("index", { results });
};

exports.seeHTML = (req, res) => {
  res.json("hello I am from pdf");
  console.log("hello");
};
