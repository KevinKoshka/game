module.exports = function (app, options) {
  app.get('/', function (req, res) {
    res.sendFile('html/index.html', options);
    console.log("Index page loaded...");
  });
}