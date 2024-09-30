/* GET 'about' page */
const about = function (req, res) {
  res.render("generic-text", {
    title: "About Our Store",
    content:
      "Our Store was founded with a passion for delivering the best products to your doorstep. <br/><br/> We aim to provide a seamless shopping experience and offer a wide range of high-quality items at competitive prices.",
  });
};

module.exports = {
  about,
};
