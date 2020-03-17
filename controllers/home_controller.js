module.exports.home = function(req, res) {
  // reading cookies
  console.log(req.cookies);

  //changing cookies
  res.cookie("nick", 25);

  return res.render("home", {
    title: "Home"
  });
};
