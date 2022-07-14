const router = require("express").Router({ mergeParams: true });
const authentService = require("../service/authentService.js");
const { AUTH_TOKEN_NAME } = require("../constans.js");
const { isGuest, isUser } = require("../midlleware/gards.js");

router.get("/", isGuest, (req, res) => {
  res.render("login");
});
async function logIn(req, res) {
  let email = req.body.email;
  let password = req.body.password;

  try {
    let token = await authentService.login(email, password);

    res.cookie(AUTH_TOKEN_NAME, token, { httpOnly: true });

    res.redirect("/");
  } catch (err) {
    res.locals.error = "Invalid email or password!";

    res.render("login", { error: "Invalid email or password!" });
  }
}

router.post("/", logIn);

router.get("/logout", isUser, (req, res) => {
  res.clearCookie(AUTH_TOKEN_NAME);

  res.redirect("/");
});

module.exports = router;
