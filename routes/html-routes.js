// Requiring middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the dashboard page
    if (req.user) {
      res.redirect("/dashboard");
    }
    res.render("signup");
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the dashboard page
    if (req.user) {
      res.redirect("/dashboard");
    }
    res.render("login");
  });

  // isAuthenticated middleware added to below routes.  If user that is not logged in tries to access these routes, they will be redirected to the signup page.
  app.get("/dashboard", isAuthenticated, (req, res) => {
    res.render("dashboard");
  });

  app.get("/students", isAuthenticated, (req, res) => {
    res.render("students");
  });

  app.get("/classes", isAuthenticated, (req, res) => {
    res.render("classes");
  });

  app.get("/attendance", isAuthenticated, (req, res) => {
    res.render("attendance");
  });
};
